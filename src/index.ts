import {PageController} from "./controller/page.controller"
import {BodyRequestLogin} from "./models/login"
const loginForm = document.getElementById("login-form") as HTMLFormElement;
const emailUser = document.getElementById("email-user") as HTMLInputElement;
const passwordUser = document.getElementById("password-user") as HTMLInputElement;
const url = "https://reqres.in/api";

loginForm.addEventListener("submit", async (event:Event) => {
  event.preventDefault();

  const data: BodyRequestLogin = {
    email: emailUser.value,
    password: passwordUser.value,
  };

  try {
    const controller = new PageController(url);
    const response = await controller.login(data, "/login");
  
    if (response.token) {
      localStorage.setItem("token", response.token);
      window.location.href="/src/views/home.html"
    } else {
      // Display error message
    }
  } catch (error) {
    console.log(error)
  }


})
