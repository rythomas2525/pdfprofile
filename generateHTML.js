const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(response, color) {
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <body>
      <div class="wrapper">
        <div class="main">
          <div class="row">
            <div class="col">
              <div class="photo-header">
                <img class="photo-heager" src="${response.data.avatar_url}"></img>
    
                <h1 class="photo-header" style="margin: auto;">Welcome</h1>
                <br>
                <h2 class="photo-header"> My name is ${response.data.name}</h2>
    
                <div class="row">
                  <nav class="links-nav">
                    <a class="nav-link" id="location" href="https://www.google.com/maps/place/${response.data.location}">
                      <h6><i class="fas fa-location-arrow"></i>${response.data.location}</h6>
                    </a>
                    <a class="nav-link" id="GitHub" href="${response.data.html_url}">
                      <h6><i class="fab fa-github"></i>Github</h6>
                    </a>
                    <a class="nav-link" id="Portfolio" href="${response.data.blog}">
                      <h6><i class="fas fa-rss-square"></i>Blog</h6>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container wrapper">
          <div class="workExp-data" style="text-align: center;">
            <h3>${response.data.bio}</h3>
          </div>
    
          <div class="row">
            <div class="col">
              <div class="card">
                <h3>Public Repositories</h3>
                <h4>${response.data.public_repos}</h4>
              </div>
              <div class="card">
                <h3>GitHub Stars</h3>
                <h4>${response.data.public_gists}</h4>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <h3>Followers</h3>
                <h4>${response.data.followers}</h4>
              </div>
              <div class="card">
                <h3>Following</h3>
                <h4>${response.data.following}</h4>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    
    </body>
      <style>
          @page {
            margin: 0;
          }
         *,
         *::after,
         *::before {
         box-sizing: border-box;
         }
         html, body {
         padding: 0;
         margin: 0;
         }
         html, body, .wrapper {
         height: 100%;
         }
         .wrapper {
         background-color: ${colors[color].wrapperBackground};
         padding-top: 100px;
         }
         body {
         background-color: white;
         -webkit-print-color-adjust: exact !important;
         font-family: 'Cabin', sans-serif;
         }
         main {
         background-color: #E9EDEE;
         height: auto;
         padding-top: 30px;
         }
         h1, h2, h3, h4, h5, h6 {
         font-family: 'BioRhyme', serif;
         margin: 0;
         }
         h1 {
         font-size: 3em;
         }
         h2 {
         font-size: 2.5em;
         }
         h3 {
         font-size: 2em;
         }
         h4 {
         font-size: 1.5em;
         }
         h5 {
         font-size: 1.3em;
         }
         h6 {
         font-size: 1.2em;
         }
         .photo-header {
         position: relative;
         margin: 0 auto;
         margin-bottom: -50px;
         display: flex;
         justify-content: center;
         flex-wrap: wrap;
         background-color: ${colors[color].headerBackground};
         color: ${colors[color].headerColor};
         padding: 10px;
         width: 95%;
         border-radius: 6px;
         }
         .photo-header img {
         width: 250px;
         height: 250px;
         border-radius: 50%;
         object-fit: cover;
         margin-top: -75px;
         border: 6px solid ${colors[color].photoBorderColor};
         box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
         }
         .photo-header h1, .photo-header h2 {
         width: 100%;
         text-align: center;
         }
         .photo-header h1 {
         margin-top: 10px;
         }
         .links-nav {
         width: 100%;
         text-align: center;
         padding: 20px 0;
         font-size: 1.1em;
         }
         .nav-link {
         display: inline-block;
         margin: 5px 10px;
         }
         .workExp-date {
         font-style: italic;
         font-size: .7em;
         text-align: right;
         margin-top: 10px;
         }
         .container {
         padding: 50px;
         padding-left: 100px;
         padding-right: 100px;
         }

         .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
         }

         .card {
           padding: 20px;
           border-radius: 6px;
           background-color: ${colors[color].headerBackground};
           color: ${colors[color].headerColor};
           margin: 20px;
         }
         
         .col {
         flex: 1;
         text-align: center;
         }

         a, a:hover {
         text-decoration: none;
         color: inherit;
         font-weight: bold;
         }

         @media print { 
          body { 
            zoom: .75; 
          } 
         }
      </style>`
}

module.exports = generateHTML