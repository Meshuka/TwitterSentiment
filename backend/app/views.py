import os
from dotenv import load_dotenv
load_dotenv()

from urllib import response
from django.shortcuts import render, redirect
from django.http import JsonResponse
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.urls import reverse

import nltk, json, re, pickle
# nltk.download('wordnet')
# nltk.download('omw-1.4')
import tweepy as tw
import pandas as pd
from nltk.corpus import stopwords
from nltk.tokenize import ToktokTokenizer
from nltk.stem.porter import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.corpus import wordnet
from nltk.tokenize import word_tokenize

tokenizer = ToktokTokenizer()
stopword_list=nltk.corpus.stopwords.words('english')

with open('./files/contractions.json','r') as f:
    contractions_dict = json.load(f)
contractions = contractions_dict['contractions']

with open('./files/negations.json','r') as f:
    neg_dict = json.load(f)
negations = neg_dict['negations']

# Create your views here.
# app to perform model operation tasks
@api_view(['GET',])
@permission_classes((IsAuthenticated,))
def index(request):
    return JsonResponse({
        "data":"Hello from app"
    })


def lower_case(text):
    return text.lower()

def remove_square_brackets(text):
    return re.sub('\[[^]]*\]', '', text)

def remove_username(text):
    return re.sub('@[^\s]+','',text)

def remove_urls(text):
    return re.sub(r"((http\S+)|(www\.))",'',text)

def remove_special_characters(text):
    pattern = r'[^a-zA-Z\s]'
    text = re.sub(pattern,'',text)
    return text

def remove_single_char(text):
    return re.sub(r'\b[a-zA-Z]\b','',text)

def remove_multiple(text):
    return re.sub("(.)\\1{2,}","\\1",text)

def replace_contractions(text):
    for word in text.split():
        if word.lower()  in contractions:
            text = text.replace(word,contractions[word.lower()])
    return text


class AntonymReplacer(object):
    def replace(self,word):
        antonyms = set()
        for syn in wordnet.synsets(word):
            if syn.pos() in ['a' ,'s']:
                for lemma in syn.lemmas():
                    for antonym in lemma.antonyms():
                        antonyms.add(antonym.name())
        if(len(antonyms) == 1):
            return antonyms.pop()
        else:
            if word in negations:
                word = word.replace(word,negations[word])
                return word
        
    #Negation Replacer
    def negReplacer(self, string):
        i=0
        finalSent = ""
        sent = word_tokenize(string)
        length_sent = len(sent)
        words = []
        while i < length_sent:
            word = sent[i]
            if word == 'not' and i+1 < length_sent:
                antonymWord = self.replace(sent[i+1])
                if antonymWord:
                    words.append(antonymWord)
                    finalSent += antonymWord + " "
                    i += 2
                    continue
            words.append(word)
            finalSent += word + " "
            i += 1
        return finalSent
    
def replace_negation(text):
    
    replacer = AntonymReplacer()
    oppWord = replacer.negReplacer(text)
    return oppWord


def remove_stopwords(text):
    tokens = tokenizer.tokenize(text)
    tokens = [token.strip() for token in tokens]
    tokens = [token.lower() for token in tokens]
    filtered_tokens = [token for token in tokens if token not in stopword_list]
    filtered_tokens = ' '.join(filtered_tokens)
    return filtered_tokens

def fetch_tweets(product, company):
    Consumer_API_Key = str(os.getenv('Consumer_API_Key'))
    Consumer_API_Secret_Key =  str(os.getenv('Consumer_API_Secret_Key'))
    access_token = str(os.getenv('access_token'))
    access_token_secret = str(os.getenv('access_token_secret'))

    print('key',Consumer_API_Key, access_token)

    auth = tw.OAuthHandler(consumer_key=Consumer_API_Key, consumer_secret=Consumer_API_Secret_Key)
    auth.set_access_token(access_token, access_token_secret)
    api = tw.API(auth, wait_on_rate_limit=True)

    new_search = product + " OR " + product+"+review OR " + company + " OR " + company + "+review -sale -available -want -filter:retweets AND -filter:replies AND -filter:links AND -filter:media AND -filter:images AND -filter:twimg"

    print(new_search)

    tweets = tw.Cursor(api.search_tweets,q=new_search,
                    lang="en",tweet_mode='extended'
                    ).items(100)

    all_tweets = [tweet.full_text for tweet in tweets]

    pd.set_option('display.max_colwidth', None)
    tweet_text = pd.DataFrame(data=all_tweets, 
                        columns=['tweet'])

    tweet_text['tweet'] =tweet_text['tweet'].apply(lower_case)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_multiple)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_single_char)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_special_characters)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_square_brackets)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_urls)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_username)
    tweet_text['tweet'] =tweet_text['tweet'].apply(replace_contractions)
    tweet_text['tweet'] =tweet_text['tweet'].apply(replace_negation)
    tweet_text['tweet'] =tweet_text['tweet'].apply(remove_stopwords)

    return tweet_text

def find_sentiment(cleaned_tweets):

    # load MNB model
    loaded_model = pickle.load(open('./model/model.sav','rb'))

        # load tfidfVectorizer
    vectorizer = pickle.load(open('./model/tfidfVectorizer.pickle','rb'))

    # transform the cleaned fetched tweets into numeric form
    tweet = vectorizer.transform(cleaned_tweets['tweet'])


    print(loaded_model, vectorizer)
    print('-------', tweet.shape)

    # perform prediction -> positive, negative, neutral
    prediction = loaded_model.predict(tweet)
    
    print(prediction)

    # list_of_tuples = list(zip(text_df1['text'], prediction))
    # pd.DataFrame(list_of_tuples, columns = ['Text', 'Sentiment'])


@api_view(["POST",])
def search_keywords(request):
    user = request.user
    user.is_registered = True
    user.save()
    print('after providing searh fields', user)
    data ={}

    print(request.data)
    data["product_name"] = request.data['product_name']
    data["company_name"] = request.data['company_name']
    data["keywords"] = request.data['keywords']

    print(data)

    cleaned_tweets = fetch_tweets(data["product_name"], data["company_name"])
    # print(cleaned_tweets)
    find_sentiment(cleaned_tweets)

    # return redirect(reverse('app:view'))
    return Response({
        "msg": "From search",
        "is_registered": user.is_registered,
        "data": data
    })


@api_view(["POST","GET",])
def model_operation(request):
    return Response({
        "data":"done"
    })