function changeLanguage() {
  var checkBox = document.getElementById("lang");
  var lable = document.getElementById("changLan");
  if (checkBox.checked) {
    document.documentElement.style.setProperty("--text-align", "left");
    document.documentElement.style.setProperty("--direction", "ftl");
    lable.innerHTML = "العربية ";
  } else {
    document.documentElement.style.setProperty("--text-align", "right");
    document.documentElement.style.setProperty("--direction", "rtl");
    lable.innerHTML = "English ";
  }
}
