var resultContainer = document.querySelector(".result");
var buttons = document.querySelectorAll(".btn-text");
var data;

buttons.forEach(function (btn) {
  btn.addEventListener("click", btnClickHander);
});

function btnClickHander() {
  var btnClicked = this.innerHTML;
  if (btnClicked === "=") {
    calcData(data);
    return;
  }
  if (btnClicked === "C") {
    clear();
    return;
  }
  if (btnClicked === "DEL") {
    deletePrev();
    return;
  }
  if (data) {
    data += btnClicked;
  } else {
    data = btnClicked;
  }
  updateResult(data);
}

function updateResult() {
  resultContainer.innerHTML = data;
}

function calcData() {
  resultContainer.innerHTML = eval(data);
}

function clear() {
  data = "";
  updateResult();
}

function deletePrev() {
  data = data.slice(0, data.length - 1);
  updateResult();
}
