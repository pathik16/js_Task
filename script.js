$(function () {

  var form = $("#form");
  enableFastFeedback(form);

  form.submit(function (event) {
    var fname = $("#fname").val();
    var lname = $("#lname").val();
    var mobilenumber = $("#mobileNumber").val();
    var email = $("#email").val();
    var password = $("#password").val();

    validateFname(fname, event);
    validateLname(lname, event);
    validateMobileNumber(mobilenumber, event);
    validateEmail(email, event);
    validatePassword(password, event);
  });
});

function enableFastFeedback(formElement) {

  //FNAME
  formElement.find("#fname").blur(function (event) {
    var fname = $(this).val();
    validateFname(fname, event);

    if (!isvalidateFname(fname)) {
      $(this).css({ "border-bottom": ".2em solid #E91E63" });
    } else {
      $(this).css({ "border-bottom": ".2em solid #1d70ec" });
    }
  });

  //LNAME
  formElement.find("#lname").blur(function (event) {
    var lname = $(this).val();
    validateLname(lname, event);

    if (!isvalidateLname(lname)) {
      $(this).css({ "border-bottom": ".2em solid #E91E63" });
    } else {
      $(this).css({ "border-bottom": ".2em solid #1d70ec" });
    }
  });

  //MOBILENUMBER 
  formElement.find("#mobileNumber").blur(function (event) {
    var mobilenumber = $(this).val();
    validateMobileNumber(mobilenumber, event);

    if (!isvalidateMobileNumber(mobilenumber)) {
      $(this).css({ "border-bottom": ".2em solid #E91E63" });
    } else {
      $(this).css({ "border-bottom": ".2em solid #1d70ec" });
    }
  });

  //EMAIL
  formElement.find("#email").blur(function (event) {
    var email = $(this).val();
    validateEmail(email, event);

    if (!isvalidateEmail(email)) {
      $(this).css({ "border-bottom": ".2em solid #E91E63" });
    } else {
      $(this).css({ "border-bottom": ".2em solid #1d70ec" });
    }
  });

  //PASSWORD
  formElement.find("#password").blur(function (event) {
    var password = $(this).val();
    validatePassword(password, event);

    if (!isvalidatePassword(password)) {
      $(this).css({ "border-bottom": ".2em solid #E91E63" });
    } else {
      $(this).css({ "border-bottom": ".2em solid #1d70ec" });
    }
  });

}

//FNAME FIELD
function validateFname(fname, event) {
  if (!isvalidateFname(fname)) {
    $("#fname-msg").text("Enter your First Name");
    event.preventDefault();
  } else {
    $("#fname-msg").text("");
  }
}

function isvalidateFname(fname) {
  return fname.length >= 2;
}


//LNAME FIELD
function validateLname(lname, event) {
  if (!isvalidateLname(lname)) {
    $("#lname-msg").text("Enter your Last Name");
    event.preventDefault();
  } else {
    $("#lname-msg").text("");
  }
}

function isvalidateLname(lname) {
  return lname.length >= 2;
}


//MOBILE NUMBER FIELD
function validateMobileNumber(mobilenumber, event) {
  if (!isvalidateMobileNumber(mobilenumber)) {
    $("#mobilenumber-msg").text("Enter your Mobile Number");
    event.preventDefault();
  } else {
    $("#mobilenumber-msg").text("");
  }
}

function isvalidateMobileNumber(mobilenumber) {
  return mobilenumber.length >= 10;
}


//EMAIL FIELD
function validateEmail(email, event) {
  if (!isvalidateEmail(email)) {
    $("#email-msg").text("Enter your Email");
    event.preventDefault();
  } else {
    $("#email-msg").text("");
  }
}

function isvalidateEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}


// PASSWORD FIELD
function validatePassword(password, event) {
  if (!isvalidatePassword(password)) {
    $("#password-msg").text("Enter your Password");
    event.preventDefault();
  } else {
    $("#password-msg").text("");
  }
}

function isvalidatePassword(password) {
  return password.length >= 8;
}