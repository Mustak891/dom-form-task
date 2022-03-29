let lable = document.createElement("label");
lable.setAttribute("for", "fname");
lable.innerHTML = "FirstName";
let input = document.createElement("input");
input.setAttribute("id", "fname");
input.setAttribute("type", "Text");
let br = document.createElement("br");
let lable1 = document.createElement("label");
lable1.setAttribute("for", "secname");
lable1.innerHTML = "SecondName";

let input1 = document.createElement("input");
input1.setAttribute("id", "secname");
input1.setAttribute("type", "Text");
let br1 = document.createElement("br");
let lable2 = document.createElement("label");
lable2.setAttribute("for", "email");
lable2.innerHTML = "E-mail";
let input2 = document.createElement("input");
input2.setAttribute("id", "email");
input2.setAttribute("type", "email");
let br2 = document.createElement("br");
let lable3 = document.createElement("label");
lable3.setAttribute("for", "pass");
lable3.innerHTML = "Password";
let input3 = document.createElement("input");
input3.setAttribute("id", "password");
input3.setAttribute("type", "password");
let brak = document.createElement("br");
let button = document.createElement("button");
button.className = "btn btn-dark";
button.setAttribute("type", "button");
button.innerHTML = "submit";
button.addEventListener("click", () =>
  console.log(input.value, input1.value, input2.value, input3.value)
);

document.body.append(
  lable,
  input,
  br,
  lable1,
  input1,
  br1,
  lable2,
  input2,
  br2,
  lable3,
  input3,
  brak,
  button
);

