import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axios";
function Search() {
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    console.log("Search button clicked");
    axiosInstance.post("user/search/").then((res) => {
      console.log(res);
      navigate("/dashboard");
    });
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
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter product name"
                    value=""
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Company Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter company name"
                    value=""
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Relevant Keywords</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter relevant keywords"
                    value=""
                  />
                </div>
                {/* <div class="col-md-12"><label class="labels">Postcode</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                                <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                                <div class="col-md-12"><label class="labels">Area</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                                <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
                                <div class="col-md-12"><label class="labels">Education</label><input type="text" class="form-control" placeholder="education" value="" /></div> */}
              </div>
              {/* <div class="row mt-3">
                                <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="" /></div>
                                <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state" /></div>
                            </div> */}
              <div class="mt-5 text-center">
                <button
                  class="btn btn-primary profile-button"
                  type="button"
                  onClick={searchHandler}
                >
                  Start Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
