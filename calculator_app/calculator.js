var isOperatorUsed = false;
var operator = ["+", "-", "/", "*"];

window.addEventListener("load", (event) => {
  document.getElementById("result").value = 0;
});

function calculate() {
  var value = document.getElementById("result").value;
  console.log("value =" + value);
  if (value == undefined || value == "") {
    document.getElementById("result").value = 0;
  } else {
    var res = eval(value);
    document.getElementById("result").value = res;
  }
}

function input(value) {
  if (operator.includes(value)) {
    if (!isOperatorUsed) {
      document.getElementById("result").value += value;
    } else {
      var result = document.getElementById("result").value;
      var substr = result.substring(0, result.length - 1);
      console.info("_____" + substr + "_____");
      var updatedResult = substr + value;
      console.log("updated =" + updatedResult);
      document.getElementById("result").value = updatedResult;
    }
    isOperatorUsed = true;
  } else {
    isOperatorUsed = false;
    if (document.getElementById("result").value == 0) {
      document.getElementById("result").value = value;
    } else {
      document.getElementById("result").value += value;
    }
  }
}

function cls() {
  document.getElementById("result").value = 0;
}
