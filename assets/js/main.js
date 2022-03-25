import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

import { FoodList } from './menu/FoodsList.js'
import { NavBar } from "./NavBar.js";
import * as UserManager from './auth/UserManager.js'; 
import { CheckForUser } from "./auth/CheckForUser.js";
import { Footer } from "./Footer.js";

////////////// app declarations ///////////////////////
const contentElement = document.querySelector("main");
const headerElement = document.querySelector("header");

////////////// event listeners ////////////////////////
contentElement.addEventListener("click", event => {
    if (event.target.id === "register__submit") {
        const userObject = {
            name: document.querySelector("#register_name").value,
            email: document.querySelector("#register_email").value,
        }
        UserManager.registerUser(userObject).then(() => {
            NavBar();
            FoodList()
        })
    } else if (event.target.id === "login__submit") {
        const userObject = {
            name: document.querySelector("#login_name").value,
            email: document.querySelector("#login_email").value,
        }
        UserManager.loginUser(userObject).then(() => {
            NavBar();
            FoodList()
        })
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
