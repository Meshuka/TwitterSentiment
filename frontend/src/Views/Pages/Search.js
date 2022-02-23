import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
import axios from "axios";
import AuthContext from "../../context/AuthContext";

function Search() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const { logoutUser, authToken } = useContext(AuthContext);
  const [product_name, setProductName] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [keywords, setKeywords] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const searchHandler = async (e) => {
    e.preventDefault();
    console.log("Search button clicked");
    if (!product_name || !company_name || !keywords) {
      console.log("Empty");
      setHasError(true);
      navigate("/search");
    } else {
      try {
        setIsLoading(true);
        setHasError(false);
        const resp = await axios({
          method: "POST",
          url: `http://127.0.0.1:8000/api/sentiment/search/`,
          timeout: 1000 * 150,
          validateStatus: (status) => {
            return status < 500;
          },
          data: {
            product_name: product_name,
            company_name: company_name,
            keywords: keywords,
          },
          headers: {
            Authorization: authToken
              ? "Bearer " + String(authToken.access)
              : null,
            "Content-Type": "application/json",
            accept: "application/json",
          },
        });
        // console.log(resp.data.predicted_data);
        setIsLoading(false);
        navigate("/dashboard", {
          state: resp.data.sentiment_data,
        });
      } catch (e) {
        console.log(e);
        // logoutUser();
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            {/* <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img class="rounded-circle mt-5" width="150px" />src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" />
                            <span class ="font-weight-bold">Edogaru</span>
                            <span class ="text-black-50">edogaru @mail.com.my</span>
                            <span></span>
                        </div> */}
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Search Criteria</h4>
              </div>
              <form>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Product Name</label>
                    <input
                      name="product_name"
                      type="text"
                      class="form-control"
                      placeholder="enter product name"
                      value={product_name}
                      onChange={(e) => {
                        setProductName(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Company Name</label>
                    <input
                      name="company_name"
                      type="text"
                      class="form-control"
                      placeholder="enter company name"
                      value={company_name}
                      onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Relevant Keywords</label>
                    <input
                      name="keywords"
                      type="text"
                      class="form-control"
                      placeholder="enter relevant keywords"
                      value={keywords}
                      onChange={(e) => {
                        setKeywords(e.target.value);
                      }}
                    />
                  </div>
                  {hasError && <p>All fields are required</p>}
                </div>

                <div class="mt-5 text-center">
                  <input
                    class="btn btn-primary profile-button"
                    type="button"
                    onClick={searchHandler}
                    value={isLoading ? `Searching...` : `Start Search`}
                    disabled={isLoading ? true : false}
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
