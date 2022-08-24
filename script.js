//register page
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");

function submit() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input1.value.length < 5 || input1.value.length === null) {
    alert(" user name Should min 5 character length");
  } else if (input2.value.length < 5 || input2.value.length === null) {
    alert(" user password Should min 5 character length");
  } else if (!input1.value.match(validRegex)) {
    alert("invalid email");
  } else {
    var user = [];
    var password = [];
    user.push(input1.value);
    localStorage.setItem("user", JSON.stringify(user));
    password.push(input2.value);
    localStorage.setItem("password", JSON.stringify(password));
    window.location.href = "login.html";
  }
}

// Login page
const inputLogin = document.getElementById("inputLogin");
const inputLogin2 = document.getElementById("inputLogin2");

function submitLogin() {
  const userRegister = !!localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : [];
  console.log("user", userRegister[0]);
  const passwordRegister = !!localStorage.getItem("password")
    ? JSON.parse(localStorage.getItem("password"))
    : [];
  console.log("password", passwordRegister[0]);
  var rand = function () {
    return Math.random().toString(36).substr(2); // remove `0.`
  };
  var token = function () {
    return rand() + rand(); // to make it longer
  };

  if (inputLogin.value.length < 5 || inputLogin.value.length === null) {
    alert(" user name Should min 5 character length");
  } else if (
    inputLogin2.value.length < 5 ||
    inputLogin2.value.length === null
  ) {
    alert(" user password Should min 5 character length");
  } else if (
    inputLogin.value !== userRegister[0] ||
    inputLogin2.value !== passwordRegister[0]
  ) {
    alert("user doesn't match");
  } else {
    localStorage.setItem("token", token());
    if (token) {
      window.location.href = "home.html";
    } else if (!token) {
      window.location.href = "register.html";
    }
  }
}

function logout() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
  window.localStorage.removeItem("password");
  window.location.href = "login.html";
}

//contact page

const inputNameContact = document.getElementById("inputNameContact");
const inputEmailContact = document.getElementById("inputEmailContact");
const inputContact = document.getElementById("inputContact");

function submitContact() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (
    inputNameContact.value < 5 ||
    inputNameContact.value === null ||
    inputNameContact.value == " "
  ) {
    alert("please enter atleast 5 chracter");
  } else if (!inputEmailContact.value.match(validRegex)) {
    alert("invalid email");
  } else if (
    inputContact.value < 5 ||
    inputContact.value === null ||
    inputContact.value == " "
  ) {
    alert("please enter atleast 5 chracter");
  }
}
