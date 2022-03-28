const variables = {
  "year": getYear(),
  "site": window.location.hostname,
};

function updateKeyword(s){
  if(s == null || s == undefined){
    return s;
  }
  Object.keys(variables).forEach(function(k){
  s = s.replace(`{${k}}`,variables[k].toString());
});
return s;
}
function getYear() {
    return new Date().getFullYear();
}
function updateYear() {
    var c = document.getElementById("copyright");
    c.innerHTML = updateKeyword(c.innerHTML).toString();
}

function updateHead(){
    var headElements = document.head.childNodes;
    headElements.forEach(element => {
      element.content = updateKeyword(element.content);
    });
    updateTitle();
}
function updateTitle(){
  document.title = updateKeyword(document.title);
}



updateYear();
updateHead();