/**let selectedFile = document.getElementById("picker").files[0];
let reader = new FileReader();
reader.addEventListener("loadend", () => { let data = reader.result; });
interpret(reader.readAsText(selectedFile));

function interpret(fileData) {
  console.log(fileData);
  let concept = document.getElementById("documentConcept");
  concept.textContent = "hello";
}*/
function openPage(evt, pageName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(pageName).style.display = "block";
  evt.currentTarget.className += " active";
}

function download(text) {
  // Creates element in the DOM
  // var lines = text.split("::");
  let snippet = document.createElement('div');

  snippet.classList.add('snippet');
  snippet.innerHTML = urlify(text);
  document.getElementById("Before").insertBefore(snippet, document.getElementById("Before").firstChild);
  //
  }

  function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
      return '<a href="' + url + '">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }


/**  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("<h1>" + text + "</h1>"));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  */
  //element.click();
  //document.body.removeChild(element);

function startup() {
  // create the link to trigger download
  // you could alternatively fetch an existing tag and update it
  var start = document.createElement('p');
  var a = document.createElement('a');
  a.id = "clear";
  // send as type application/octet-stream to force download, not in browser
  a.href = saveState();

  a.innerText = "Save Page";

  start.appendChild(a);
  document.getElementById("Before").appendChild(start);

  /**download("Create a fresh Collgg Page::Click the 'new page' button at the bottom of the 'before' section");
  download("Save current Collgg page::Right click -> 'save as' , should work with any browser");
  download("Make my own Collgg::Clone 'Collgg' from braytonk.github.io");
  download("Collgg 'Today' tab Sytax::Title + two colons + a brief description of what you've learned");
  download("Tutorial for Collgg location::Under the 'Sooooo, what's the point??' tab")*/

}

function saveState() {
  let stateText = "data:application/octet-stream;base64,";
  
  let snippets = "download(\"test\");"; 
  let start = document.getElementById('Before');
  while (start.firstChild) {
    snippets = snippets + "download(\"" + start.lastChild.innerText + "\"); ";
    start.removeChild(start.lastChild);
  }
  stateText = stateText + btoa("<html>"+ document.getElementsByTagName('html')[0].outerHTML + 
  "<script>" + snippets + "</script></html>");
  return stateText;
}

/*let clearButton = document.getElementById("clear");

clearButton.addEventListener("click", function(){
  while (clearButton.lastChild) {
    document.getElementById("Before").removeChild(document.getElementById("Before").firstChild);
  }
})**/

// Start file download.
document.getElementById("todaySubmit").addEventListener("click", function(){
  // Generate download of hello.txt file with some content
  var text = document.getElementById("todayNote").value;

  var filename = "myFormattedNote.html";
  
  download(text);
}, false);