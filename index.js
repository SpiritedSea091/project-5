const darkMode = document.getElementById("flexSwitchCheckDefault");

darkMode.oninput = function(){
  if(this.checked){
    document.querySelector("body").classList.add("dark-mode");
    $(".background").addClass("dark-mode");
    $(".box").addClass("dark-mode");
    $(".large-num").addClass("dark-mode");
    $(".med-num").addClass("dark-mode");
    $("h1").addClass("dark-mode");
  }
  if(this.checked === false){
    document.querySelector("body").classList.remove("dark-mode");
    $(".background").removeClass("dark-mode");
    $(".box").removeClass("dark-mode");
    $(".large-num").removeClass("dark-mode");
    $(".med-num").removeClass("dark-mode");
    $("h1").removeClass("dark-mode");
  }
}
