const logoutButton = document.getElementById("logout-button") as HTMLButtonElement;

logoutButton.addEventListener("click", ()=>{
    localStorage.removeItem("token");
    window.location.href = "/";
})