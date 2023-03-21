function totalDays() {
  var checkInDate = document.getElementById("checkin").value;
  var checkOutDate = document.getElementById("checkout").value;
  if (
    document.getElementById("checkin").value != "" &&
    document.getElementById("checkout").value != ""
  ) {
    document.getElementById("days").value = moment(checkOutDate).diff(
      moment(checkInDate),
      "days"
    );
    totalCost();
  } else {
    document.getElementById("cost").value = "";
    document.getElementById("days").value = "";
  }
}

function totalCost() {
  var numAdults = document.getElementById("adults").value;
  var days = document.getElementById("days").value;
  document.getElementById("cost").value = 150 * days * numAdults;
}

function resetFields() {
  const username = $("#uname");
  username.parent().removeClass("has-error");
  const firstname = $("#fname");
  firstname.parent().removeClass("has-error");
  const lastname = $("#lname");
  lastname.parent().removeClass("has-error");
  const phonenum = $("#phoneNum");
  phonenum.parent().removeClass("has-error");
  const faxnum = $("#faxNum");
  faxnum.parent().removeClass("has-error");
  const email = $("#email");
  email.parent().removeClass("has-error");

  toastr.info("Form has been reset");
}

$("form").submit(function (event) {
  event.preventDefault();
});

function submitForm() {
  var errorCount = 0;
  const username = $("#uname");
  username.parent().removeClass("has-error");
  const firstname = $("#fname");
  firstname.parent().removeClass("has-error");
  const lastname = $("#lname");
  lastname.parent().removeClass("has-error");
  const phonenum = $("#phoneNum");
  phonenum.parent().removeClass("has-error");
  const faxnum = $("#faxNum");
  faxnum.parent().removeClass("has-error");
  const email = $("#email");
  email.parent().removeClass("has-error");
  const cost = $("#cost");
  cost.parent().removeClass("has-error");

  if ($("#uname").val() == "") {
    errorCount += 1;
    $("#uname").parent().addClass("has-error");
    toastr.error("Please enter a username");
  }

  if ($("#fname").val() == "") {
    errorCount += 1;
    $("#fname").parent().addClass("has-error");
    toastr.error("Please enter a first name");
  }

  if ($("#lname").val() == "") {
    errorCount += 1;
    $("#lname").parent().addClass("has-error");
    toastr.error("Please enter a last name");
  }
  if ($("#phoneNum").val() == "") {
    errorCount += 1;
    $("#phoneNum").parent().addClass("has-error");
    toastr.error("Please enter a phone number");
  }
  if ($("#faxNum").val() == "") {
    errorCount += 1;
    $("#faxNum").parent().addClass("has-error");
    toastr.error("Please enter a fax number");
  }
  if ($("#email").val() == "") {
    $("#email").parent().addClass("has-error");
    errorCount += 1;
    toastr.error("Please enter an email");
  }
  if (document.getElementById("cost").value < 0) {
    $("#cost").parent().addClass("has-error");
    errorCount += 1;
    toastr.error("Cost was negative");
  }
  if (document.getElementById("cost").value == "") {
    $("#cost").parent().addClass("has-error");
    errorCount += 1;
    toastr.error("Cost wasn't calculated");
  }

  if (errorCount == 0) {
    toastr.success("Form was submitted successfully");
  }
}
