var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));|   
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articleone = {
	title: 'article one | neelisetty nikith'
	heading: 'article one'
	date: '10-11-18'
	content:  `<p>
                    this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
                </p>
                <p>
                    this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
                </p>
                <p>
                    this is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first articlethis is the content for my first article
                </p>`
};
function createtemplate (data) {
	var title = data.title
	var heading =  data.heading
	var date =  data.date
	var content =  data.content
	var htmltemplate = `<html>
	    <head>
	        <tittle>
	            ${title}
	        </tittle>
	        <meta name="viexport" content="width-device-width, initial-scale-1"/>
	         <link href="/ui/style.css" rel="stylesheet" />
	    </head>
	    
	    <body>
	       <div class="container">
	            <div>
	                <a href="/">home</a>
	            </div>
	            <hr/>
	            <h3>
	                ${heading}
	            </h3>
	            <div>
	                 ${date}
	            </div>
	            <div>
	                ${content}
	            </div>
	        </div>
	    </body>
	</html>
`; 
return htmltemplate;
}
app.get('/article-one', function (req, res) {
  res.send(createtemplate(articleone));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
