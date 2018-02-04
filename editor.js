function addText(event) {
  var textarea = document.getElementById("tooltest");
  var targ = event.target || event.srcElement;

  switch(targ.innerText){
    case "Bold":
          textarea.value += "**Bold**";
          break;
    case "Italic":
          textarea.value += "*Italic*";
          break;
    case "Underline":
          textarea.value += "__Underline__";
          break;
  }
}
// asdasdas
