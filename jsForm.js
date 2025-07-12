const form = document.querySelector("form");
const email = document.getElementById("email");
const email_error = document.getElementById("email_error");
const country = document.getElementById("country");
const country_error = document.getElementById("country_error");
const postcode = document.getElementById("postcode");
const postcode_error = document.getElementById("postcode_error");
const password = document.getElementById("password");
const password_error = document.getElementById("password_error");
const password_confirm = document.getElementById("password_confirm");
const password_confirm_error = document.getElementById(
  "password_confirm_error"
);

const setClass = (isValid, element) => {
  element.valid = isValid;
};

// Validation Checks //

const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;

const isEmailValid = () => {
  const validity = email.value.length !== 0 && emailRegExp.test(email.value);
  return validity;
};

const isCountryValid = () => {
  const validity = country.value.length !== 0;
  return validity;
};

const isPostcodeValid = () => {
  const validity = postcode.value.length == 4 && isFinite(postcode.value);
  return validity;
};

const isPasswordValid = () => {
  const validity = password.value.length >= 8;
  return validity;
};

// Input Handlers //

const handleEmailInput = () => {
  const emailInput = isEmailValid();
  setClass(emailInput, email);
  updateEmailError(emailInput);
};

const isPasswordConfirmValid = () => {
  const validity =
    password_confirm.value.length >= 8 &&
    password_confirm.value == password.value;
  return validity;
};

const handleCountryInput = () => {
  const countryInput = isCountryValid();
  setClass(countryInput, country);
  updateCountryError(countryInput);
};

const handlePostcodeInput = () => {
  const postcodeInput = isPostcodeValid();
  setClass(postcodeInput, postcode);
  updatePostcodeError(postcodeInput);
};

const handlePasswordInput = () => {
  const passwordInput = isPasswordValid();
  const passwordConfirmInput = isPasswordConfirmValid();
  setClass(passwordInput, password);
  updatePasswordError(passwordInput);
  updatePasswordConfirmError(passwordConfirmInput);
};

const handlePasswordConfirmInput = () => {
  const passwordConfirmInput = isPasswordConfirmValid();
  setClass(passwordConfirmInput, password_confirm);
  updatePasswordConfirmError(passwordConfirmInput);
};

// Error Updaters //

const updateEmailError = (isValid) => {
  if (isValid) {
    email_error.textContent = "";
    email_error.removeAttribute("class");
  } else {
    email_error.textContent = "Invalid email entry format.";
    email_error.setAttribute("class", "error active");
  }
};

const updateCountryError = (isValid) => {
  if (isValid) {
    country_error.textContent = "";
    country_error.removeAttribute("class");
  } else {
    country_error.textContent = "Country must be entered";
    country_error.setAttribute("class", "error active");
  }
};

const updatePostcodeError = (isValid) => {
  if (isValid) {
    postcode_error.textContent = "";
    postcode_error.removeAttribute("class");
  } else {
    postcode_error.textContent =
      "Postcode can only be numbers and must have a length of 4";
    postcode_error.setAttribute("class", "error active");
  }
};

const updatePasswordError = (isValid) => {
  if (isValid) {
    password_error.textContent = "";
    password_error.removeAttribute("class");
  } else {
    password_error.textContent = "Password must be at lest 8 characters long";
    password_error.setAttribute("class", "error active");
  }
};

const updatePasswordConfirmError = (isValid) => {
  if (isValid) {
    password_confirm_error.textContent = "";
    password_confirm_error.removeAttribute("class");
  } else {
    password_confirm_error.textContent = "Password doesn't match";
    password_confirm_error.setAttribute("class", "error active");
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  handleEmailInput();
  handleCountryInput();
  handlePostcodeInput();
  handlePasswordInput();
  handlePasswordConfirmInput();
};

email.addEventListener("input", handleEmailInput);
country.addEventListener("input", handleCountryInput);
postcode.addEventListener("input", handlePostcodeInput);
password.addEventListener("input", handlePasswordInput);
password_confirm.addEventListener("input", handlePasswordConfirmInput);
form.addEventListener("submit", handleSubmit);
