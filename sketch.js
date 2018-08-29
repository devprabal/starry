function clearTextField(a) {
  if (a.value == 'Type in your name') {
    a.value = "";
  } else if (a.value == "") {
    a.value = "Type in your name";
  } else {
    // do nothing
  }
}

function clearPasswordField(a) {
  var p = document.getElementById("pass");
  if (a.value == "Wrong Password") {
    a.value = "";
    p.setAttribute('type', 'password');
  }
}

function authenticate() {
  var passEntered = document.getElementById("pass").value;
  var p = document.getElementById("pass");
  if (passEntered != 'niharika') {
    p.setAttribute('type', 'text');
    document.getElementById("pass").value = "Wrong Password";
  } else {
    location.href = "wish.html";
  }
}

function diffname() {
  var name = document.getElementById('name').value;
  if (name !== 'Type in your name' || name !== "") {
    document.getElementById('name').value = "Type in your name";
    document.getElementById('pass').value = "";
  }
}
