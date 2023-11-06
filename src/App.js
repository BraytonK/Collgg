import { Background } from "./Background";
import { Table } from "./Table";
import { Modal } from "./Modal";
import { initJuno } from "@junobuild/core";
import { Auth } from "./Auth";
import { useEffect } from "react";

function App() {
  // TODO: STEP_1_INITIALIZATION
   useEffect(() => {
     (async () =>
       await initJuno({
         satelliteId: "kf5lt-fiaaa-aaaal-adaka-cai",
       }))();
   }, []);
    function openPage(evt, pageName) {
      /**
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
      loadDynamicNavbar(pageName);
      */
    }

  

    function loadDynamicNavbar(pageName) {
      /**
      // Remove existing tabs
      var parent = document.getElementById("nav");
      while (parent.firstChild) {
        parent.firstChild.remove();
      }

      // Scan headers
      var content = document.getElementById(pageName).getElementsByTagName("H2");
      for (var i = 0; i < content.length; i++) {
        // Create a new list item for each content header
        var li = document.createElement("li");
        var a = document.createElement("a");
        li.className = "nav-item";
        a.className = "nav-link";
        a.innerHTML = "#" + content[i].innerHTML;
        a.href = "#" + content[i].innerHTML;
        // Append the div to the navbar
        li.appendChild(a);
        document.getElementById("nav").appendChild(li);
      }
      */
    }

  return (
    <>

        <head>
          <title>Collgg</title>
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,900" />

          <link rel="stylesheet" href="index.css" />
        </head>
        <main>
          <body class = "is-preload" data-spy="scroll" data-target=".navbar">

            <div id="wrapper">
              <div id="bg"></div>
              <div id="overlay"></div>

                <nav id="navbar" class="navbar">
                  <ul class ="nav" id="nav">
                    <li id="entry-nav-item">A <a href="https://collgg.com"><img src="collgg-logo.png" width="50" height="35" id="logo"></img></a> generated page</li>
                  </ul>
                </nav>

                <header id ="header">

                  <h1><a href="https://collgg.com"><img src="logo.png" width="200" height="140" id="logoMain"></img></a></h1>
                  <div id = "allcontent">
                        <div class="tab">
                        <table class="snippettabs">
                          <tr>
                            <div id="dynamictabs"></div>
                              <th>
                                <button class="tablinks" onclick="openPage(event, 'aboutme')" id="defaultOpen"> About Me </button>
                              </th>
                              <th>
                                <button class="tablinks" onclick="openPage(event, 'projects')"> Projects </button>
                              </th>
                              <th>
                                <button class="tablinks" onclick="openPage(event, 'contact')"> Contact </button>
                              </th>
                          </tr>
                        </table>
                        </div>
                  </div>

                    <Auth>
                    <article class = "snippetbrowser">
                        <Table />

                        <Modal />
                    </article>
                    </Auth>
        
                </header>
                  </div>
          </body>
        </main>

    </>
  );
}

export default App;