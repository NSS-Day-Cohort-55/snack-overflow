import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { FoodList } from './menu/FoodsList.js'
import { NavBar } from "./NavBar.js";
import * as UserManager from './auth/UserManager.js'; 
import { CheckForUser } from "./auth/CheckForUser.js";
import { Footer } from "./Footer.js";

////////////// app declarations ///////////////////////
const contentElement = document.querySelector("main");

////////////// event listeners ////////////////////////

const headerElement = document.querySelector("header");

    headerElement.addEventListener("click", event => {
        if (event.target.id === "logout") {
          UserManager.logoutUser();
          NavBar();
          FoodList();
        }
    })



///////////// end event listeners /////////////////////



// This function invokes modules in the view
const startSO = () => {
    CheckForUser();
    Footer();
}

// application checks for a user
startSO()
