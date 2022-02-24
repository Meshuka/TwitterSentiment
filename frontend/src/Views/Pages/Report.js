import React, { useState, useEffect } from 'react';
import "./report.css";
import { useLocation } from "react-router-dom";


export default function Report() {
    const location = useLocation();
    
    let sentimentData = location.state;
    console.log(sentimentData);

    const [fetchReviewCount, setFetchReviewCount] = useState(0);


    useEffect(() => {
       let total = 0;
       sentimentData.tweetdata.forEach(sentiment => {
           total += sentiment.value;
       });

       setFetchReviewCount(total);

       setTimeout(() => {
        window.print()
       }, 4000);

    }, []);

  return (
    <div className="my-5 page" size="A4">
    <div className="p-5">
        <section className="top-content bb d-flex justify-content-between">
            <div className="logo">
                <h2>Gadget Reviews</h2>
                {/* <!-- <img src="logo.png" alt="" className="img-fluid"> --> */}
            </div>
            <div className="top-left">
                <div className="graphic-path">
                    <p>Report</p>
                </div>
                <div className="position-relative">
                    <p>Report no.:<span>001</span></p>
                </div>
            </div>
        </section>

        <section className="store-user mt-5">
            <div className="col-10">
                <div className="row bb pb-3">
                    <div className="col-7">
                        <p>You searched for:</p>
                        <h2>{sentimentData.product_name}</h2>
                        <p className="address"> 777 Brockton Avenue, <br/> Abington MA 2351, <br/>Vestavia Hills AL </p>
                        
                    </div>
                    <div className="col-5">
                        <p>Searched By:</p>
                        <h2>Sabur Ali</h2>
                        <p className="address"> email <br/> Abington MA 2351, <br/>Vestavia Hills AL </p>
                        
                    
                </div>
                </div>
                <div className="row extra-info pt-3">
                    <div className="col-7">
                        <p>Total Fetched Reviews: <span>{fetchReviewCount}</span></p>
                        
                    </div>
                    <div className="col-5">
                        <p> Date: <span>{sentimentData.fetchedDate}</span></p>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-area mt-4">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>Sentiments</td>
                        <td>Total</td>
                    </tr>
                </thead>
                <tbody>
                    {sentimentData.tweetdata.map(sentiment => {
                        return (
                            <tr>
                        <td>
                            <div className="media">
                                
                                <div className="media-body">
                                    <p className="mt-0 title">{sentiment.sentiment}</p>
                                    
                                </div>
                            </div>
                        </td>
                        <td>{sentiment.value}</td>
                    </tr>
                        )
                    })}
                </tbody>
            </table>
        </section>

        <section className="balance-info">
            <div className="row">
                <div className="col-12">
                    <p className="m-0 font-weight-bold"> Note: </p>
                    <p>Your Search for {sentimentData.product_name} product resulted in a total of {fetchReviewCount} reviews, It contains __ positive, __negative  and __ neutral reviews.</p>
                </div>
                {/* <!-- <div className="col-4">
                    <table className="table border-0 table-hover">
                        <tr>
                            <td>Total:</td>
                            <td>800$</td>
                        </tr>
                        <tr>
                            <td>Tax:</td>
                            <td>15$</td>
                        </tr>
                        <tr>
                            <td>Deliver:</td>
                            <td>10$</td>
                        </tr>
                        <tfoot>
                            <tr>
                                <td>Total:</td>
                                <td>825$</td>
                            </tr>
                        </tfoot>
                    </table> */}

                    {/* Signature -->
                    <!-- <div className="col-12">
                        <img src="signature.png" className="img-fluid" alt="">
                        <p className="text-center m-0"> Director Signature </p>
                    </div>
                </div> -->  */}
            </div>
        </section>

        {/* <!-- Cart BG -->
        <!-- <img src="cart.jpg" className="img-fluid cart-bg" alt=""> --> */}

        {/* <footer>
            <hr/>
            <p className="m-0 text-center">
                Report generated at Gadget Reviews - <a href="#!">www.gadgetreviews.com</a>
            </p>
            <div className="social pt-3">
                <span className="pr-2">
                    <i className="fas fa-mobile-alt"></i>
                    <span>Gadget Reiews</span>
                </span>
                <span className="pr-2">
                    <i className="fas fa-envelope"></i>
                    <span>me@gadget.com</span>
                </span>
                <span className="pr-2">
                    <i className="fab fa-facebook-f"></i>
                    <span>/sabur.7264</span>
                </span>
                <span className="pr-2">
                    <i className="fab fa-youtube"></i>
                    <span>/abdussabur</span>
                </span>
                <span className="pr-2">
                    <i className="fab fa-github"></i>
                    <span>/example</span>
                </span>
            </div>
        </footer> */}
    </div>
</div>
  )
};
