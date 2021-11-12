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
  var lines = text.split("::");
  let snippet = document.createElement('div');
  snippet.classList.add('snippet');
  if (lines.length > 1) {
    let snippetHeader = document.createElement("h5");
    snippetHeader.textContent = lines[0];
    let snippetText = document.createElement("h3");
    snippetText.textContent = lines[1];
    snippet.appendChild(snippetHeader);
    snippet.appendChild(snippetText);
  }
  else {
    if (lines.length > 0) {
      let snippetText = document.createTextNode(lines[0]);
      snippet.appendChild(snippetText);
    }
  }
  document.getElementById("Before").insertBefore(snippet, document.getElementById("Before").firstChild);
  //



/**  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent("<h1>" + text + "</h1>"));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  */
  //element.click();
  //document.body.removeChild(element);
}

function startup() {
  // create the link to trigger download
  // you could alternatively fetch an existing tag and update it
  var start = document.createElement('h3');
  var a = document.createElement('a');

  // send as type application/octet-stream to force download, not in browser
  a.href = 
      "data:application/octet-stream;base64," +
      btoa("<html>"+ document.getElementsByTagName('html')[0].outerHTML + 
      "</html>");

  a.innerText = "New Page";

  // put the link wherever you want
  start.appendChild(a);
  document.getElementById("Before").appendChild(start);
}

// Start file download.
document.getElementById("todaySubmit").addEventListener("click", function(){
  // Generate download of hello.txt file with some content
  var text = document.getElementById("todayNote").value;

  var filename = "myFormattedNote.html";
  
  download(text);
}, false);