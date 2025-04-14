SetUser = "PanelAdmin";
SetPassword = "PanelAdminPass";

$("#LoginBtn").on("click", function () {
  let Username = $("#getUser").val();
  let Password = $("#getPassword").val();
  console.log(Username);
  console.log(Password);

  if (Username == SetUser && Password == SetPassword) {
    $("#LoginForm").addClass("hidden");
  } else {
    alert("Login Failed");
  }
});
