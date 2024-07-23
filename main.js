const getname = document.querySelector(".name");
const getsurname = document.querySelector(".surname");
const getnumber = document.querySelector(".number");
const getemail = document.querySelector(".email");
const getmessage = document.querySelector(".message");
const getcountPop = document.querySelector(".countPop");
const geterrorPop = document.querySelector(".errorPop");
const getbtn = document.querySelector(".btn");
const getcount = document.querySelector(".count");
const getinfoForm = document.querySelector(".infoForm");

// Operations

getbtn.addEventListener("click", function (e) {
  e.preventDefault();
  // Value
  const nameValue = getname.value;
  const surnameValue = getsurname.value;
  const numberValue = getnumber.value;
  const emailValue = getemail.value;
  const messageValue = getmessage.value;

  if (nameValue && surnameValue && numberValue && emailValue && messageValue) {
    const fullname = `${nameValue} ${surnameValue}`;

    const encodedFullName = encodeURIComponent(fullname);
    const encodedNumber = encodeURIComponent(numberValue);
    const encodedEmail = encodeURIComponent(emailValue);
    const encodedMessage = encodeURIComponent(messageValue);

    const whatsappUrl = `https://wa.me/${encodedNumber}?text=${encodedFullName}: ${encodedMessage}:${encodedEmail}`;
    window.open(whatsappUrl, "_blank");

    localStorage.setItem("full name", fullname);
    localStorage.setItem("number", numberValue);
    localStorage.setItem("email", emailValue);
  } else {
    console.log(
      "Please enter all fields (name, surname, phone number, email, and message)."
    );
    geterrorPop.innerHTML =
      "Please enter all fields (name, surname, phone number, email, and message).";
  }
});

getmessage.addEventListener("input", function (e) {
  const currentValue = e.target.value.length;
  const maxlength = 10;
  if (currentValue > maxlength) {
    e.target.value = e.target.value.slice(0, maxlength); // Fixed slicing
    getcountPop.classList.add("error");
    getcountPop.innerHTML = "Enter less than 10 chacarter";
  } else {
    getcountPop.innerHTML = "";
  }

  getcount.innerHTML = `${e.target.value.length}/${maxlength}`;
});

getinfoForm.addEventListener("input", (e) => {
  const nameValue = getname.value;
  const surnameValue = getsurname.value;
  const numberValue = getnumber.value;
  const emailValue = getemail.value;
  const messageValue = getmessage.value;

  // function reset() {
  //   nameValue.innerHTML = "";
  //   surnameValue.innerHTML = "";
  //   numberValue.innerHTML = "";
  //   emailValue.innerHTML = "";
  //   messageValue.innerHTML = "";
  // }

  if (!nameValue) {
    getname.classList.add("redError");
    geterrorPop.classList.add("error");
    geterrorPop.innerHTML = "Enter the required information.";
  } else {
    getname.classList.remove("redError");
  }

  if (!surnameValue) {
    getsurname.classList.add("redError");
    geterrorPop.classList.add("error");
    geterrorPop.innerHTML = "Enter the required information.";
  } else {
    getsurname.classList.remove("redError");
  }

  if (!numberValue) {
    getnumber.classList.add("redError");
    geterrorPop.classList.add("error");
    geterrorPop.innerHTML = "Enter the required information.";
  } else {
    getnumber.classList.remove("redError");
  }

  if (!emailValue) {
    getemail.classList.add("redError");
    geterrorPop.classList.add("error");
    geterrorPop.innerHTML = "Enter the required information.";
  } else {
    getemail.classList.remove("redError");
  }

  if (!messageValue) {
    getmessage.classList.add("redError");
    geterrorPop.classList.add("error");
    geterrorPop.innerHTML = "Enter the required information.";
  } else {
    getmessage.classList.remove("redError");
  }

  if (nameValue && surnameValue && numberValue && emailValue && messageValue) {
    geterrorPop.innerHTML = "";
  }
});
// reset();
