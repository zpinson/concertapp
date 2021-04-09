import React, { Component } from "react";

function HomeSearch() {
  return (
    <div class="container" id="main-container">
      <div class="valign-wrapper center-align" style={{padding: "0px"}}>
        <div class="center-align" style={{display: "flex"}}>
          <div class="card blue-grey darken-2">
            <div class="card-image waves-effect waves-block waves-light">
              <i id="tag" class="activator small material-icons right">
                info_outline
              </i>
              <img src="../../../../images/MSG_SEA.jpg" />
            </div>
            <div class="card-content">
              <span
                class="card-title col s4 offset-s4 left-align white-text"
                type="text"
                id="reveal-card"
              ></span>
            </div>
            <div
              style={{backgroundColor: "#212021", color: "white"}}
              class="card-reveal"
            >
              <span
                class="card-title grey-text text-darken-4 center-align"
                id="card-reveal-text"
              >
                <h2 style={{color: "white"}}>Welcome to myConcerts!</h2>
                <i class="material-icons white-text right">close</i>
              </span>
              <p>
                <br />
              </p>
              <h5 style={{margin: "55px", lineHeight: "1.5"}}>
                myConcerts is a program designed with the music lover in mind
                and heart. Using API calls and database storage, we provide the
                user with the ability to search for upcoming events using the
                artist's name.
                <p></p>
                Sign-up with an account today to be able to store your favorite
                artists for easy future reference as well as RSVP to events you
                wish to attend. The saved information will appear on your user
                dashboard when you sign in again!
              </h5>
            </div>
            <div class="container" id="form-container">
              <form id="search-form" class="col s12 center-align">
                <input
                  id="search-input"
                  class="col s12 center-align"
                  type="text"
                  placeholder="Enter a musical artist's name"
                />
                <button class="btn btn-info btn-block col s4 offset-s4">
                  Show me concerts!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSearch;
