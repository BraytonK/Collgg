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
  let outerSnippet = document.createElement('div');
  let innerSnippet = document.createElement('textarea');
  //TODO, debug this
  let removeButton = document.createElement("BUTTON");

  innerSnippet.value = urlify(text);
  outerSnippet.classList.add('snippet');
  removeButton.innerHTML = "REMOVE";
  removeButton.onclick =  removeSelectedNode;
  outerSnippet.appendChild(innerSnippet);
  outerSnippet.appendChild(removeButton);

  //innerSnippet.onblur = saveState; 
  document.getElementById("Before").insertBefore(outerSnippet, document.getElementById("Before").firstChild);
  //TODO error lies here
  //Also the save button is savign the some, maybe the inner html needs to be written to the text area
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

  function htmlify() {
    let nodeList = document.getElementById("Before").childNodes;
    // use "before" childNodes
    let nodeHtml = '';
    for (let i = 0; i < nodeList.length; i++) {
      //nodeHtml = nodeHtml + "<h1> " + nodeList[i].value + " </h1>";
      nodeList[i].innerHTML = nodeList[i].value;
    }
    //return nodeHtml;
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
  //var start = document.createElement('p');
  //var saveBtn = document.createElement('button');
 // saveBtn.id = "save";
  // send as type application/octet-stream to force download, not in browser

  //start.appendChild(saveBtn);
  //document.getElementById("Before").appendChild(start);
  //saveBtn.click = saveState;

  /**download("Create a fresh Collgg Page::Click the 'new page' button at the bottom of the 'before' section");
  download("Save current Collgg page::Right click -> 'save as' , should work with any browser");
  download("Make my own Collgg::Clone 'Collgg' from braytonk.github.io");
  download("Collgg 'Today' tab Sytax::Title + two colons + a brief description of what you've learned");
  download("Tutorial for Collgg location::Under the 'Sooooo, what's the point??' tab")*/

}

function saveState() {
  let stateText = "data:application/octet-stream;base64,";
  
  let snippets = "document.createElement(\"div\");"; 
  let start = document.getElementById("Before");
  let startTail = document.getElementById("Before").lastChild;
  let snippetHtml = htmlify();
  /**while (start.lastChild = startTail) {
    snippets = snippets + "download(\"" + start.firstChild.firstChild.value + "\"); ";
    start.removeChild(start.firstChild);
  }**/
  stateText = stateText + btoa("<html>"+ document.getElementById('Before').outerHTML + htmlify() + 
  "</html>");
  document.getElementById('save').innerHTML = "<a href = " + stateText + "> Save </a>";
  console.log("saved");
  console.log(stateText);
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


function removeSelectedNode() {
  selectedSnippet = document.activeElement;
  console.log("removed: " + selectedSnippet.parentNode.tagName);
  selectedSnippet.parentNode.remove();
}

/**var userSelection = document.getElementsByClassName('snippet');

for(var i = 0; i < userSelection.length; i++) {
  (function(index) {
    userSelection[index].addEventListener("focusout", function() {
       console.log("Clicked index: " + index);
     })
  })(i);
}**/