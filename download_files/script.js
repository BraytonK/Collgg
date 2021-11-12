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

function download(filename, text) {
  // Creates element in the DOM
  let snippet = document.createElement('div');
  snippet.classList.add('snippet');
  snippet.classList.add('tri-right');
  snippet.classList.add('left-top');
  let snippetText = document.createTextNode(text);
  snippet.appendChild(snippetText);
  document.getElementById("Before").appendChild(snippet);



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
  var a = document.createElement('a');

  // send as type application/octet-stream to force download, not in browser
  a.href = 
      "data:application/octet-stream;base64," +
      btoa("<html>"+ document.getElementsByTagName('html')[0].outerHTML + 
      "</html>");

  a.innerText = "Download this page";

  // put the link wherever you want
  document.getElementById().appendChild(a);

  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", "http://tumult.com/support/examples/dynamic-javascript-content-txt-file/text.txt", true);
  txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4) { // Makes sure the document is ready to parse.
  if (txtFile.status === 200) { // Makes sure the file exists.
  allText = txtFile.responseText;
  //lines = txtFile.responseText.split("\n"); // Will separate each line into an array
  var customTextElement2 = document.getElementById('f0');
  customTextElement2.innerHTML = txtFile.responseText;
  }
  }
  }
  txtFile.send(null)
}

// Start file download.
document.getElementById("todaySubmit").addEventListener("click", function(){
  // Generate download of hello.txt file with some content
  var text = document.getElementById("todayNote").value;
  var filename = "myFormattedNote.html";
  
  download(filename, text);
}, false);