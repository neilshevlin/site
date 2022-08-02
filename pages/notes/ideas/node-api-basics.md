---
title: Notes on using basic usage of node.js to build an API
description: Notes on using basic usage of node.js to build an API
---

{% section .hero %}
# Some basics on the use of Node.js for building API's
## Basics

**Core modules**

- HTTP
- HTTPS
- fs
- path
- os

```jsx
const http = require('http');//import http object in to http

http.createServer();//create server is a native function of http objects
```

**createServer**

```jsx
function rqListner(req, res){ 

}
//createServer returns a server object
const server = http.createServer(rqListner);
//OR
const server = http.createServer(function(req, res){
console.log("logged");
})
//OR
const server = http.createServer((req, res) => {console.log("logged")});

```

**Server**

```jsx
const server = http.createServer((req, res) => {console.log("logged")});

server.listen(8080);//port? 

//server will now stay opened listening in to requests at port 8000
```

Response (This can be done more simply with express js)

```jsx
const server = http.createServer((req, res) => {console.log("logged")});

res.setHeader('Content Type', 'text/html');//set the content type
res.write('<html>');//open
res.write('<head>My first Page</head>');//write in the content
res.write('</html>');//close
res.end();

```

Url routing

```jsx
const server = http.createServer((req, res) => {console.log("logged")});

const url = req.url; //Get the Url of the request
if(url === '/'){//compare
res.write('<html>');
res.write('<head>Open page</head>');
res.write('
<body>
	<form action="/message" method="POST">//action is the url to be sent to
	//POST is sent to the action url
		<input type="text" name="message">
			<button type="submit">SUBMIT</button>
		</input>
	</form>
</body>
')
res.write('<html>');
return res.end(); //we exit the anonymous function
}
```

**Important**

- **POST**
- **Form Action**
- **Returning res.end**

The Above code is serving up a specific code if condition url is met. When you click the sumbit it redirects to /message. This doesnt have anything special. But it will serve up the default. 

**Request redirections**

```jsx
const fs = require('fs'); //we need this to write to files

if(url === "/message" && method === POST){
	fs.writeFileSync('message.txt', 'Dummy');//creates a dummy text file with some text
	res.setStatusCode = 302;//302 status code for redirection
	res.setHeader('location', '/');//new header file
	return res.end();
}
```

**Parsing requests**

```jsx
const fs = require('fs'); //we need this to write to files

if(url === "/message" && method === POST){
	const body = [];//array for the body entered

	req.on('data', (chunk) =>{ //take in the chunks as the data is being parsed
	console.log(chunk);//this will output hex code chunks
	body.push(chunk); // Push hex code in to the array
	});
	
	req.on('end', ()=>{ //when parsing is finsihed
		const parsedbody = Buffer.concat(body).toString(); //new buffer object to string
		const message = parsedbody.split('=')[1];//split from = and take second value
		fs.writeFileSync('message.txt', message);//write to file. 
	})
};

```

The above code 

1. reads in the data in chunks
2. pushes them to an array
3. when finshes, creates a buffer for the array
4. parses the buffer to a string
5. Grabs the actual message part
6. Writes it to a text file 

**Node Module System.** 

Sometime you may wish to handle your logic in another file. 

```jsx
//APP.JS file
const http = require('http');
const routes = require('./routes');//this will grab the export from a bundled module
const server = http.createServer(routes);//passes in the routes file logic
serve.listen(3000);
```

```jsx
//ROUTES.JS file
const fs = require('fs');
const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	//some logic
	res.write('<html><body><h1>hello world</h1></body></html>');
	res.end();
}

module.exports.listner = requesthandler;//bundles everything up

```
## Express.js

Express.js is a framework for node.js. 

There are some other alternatives to express like

- Plain Vanilla node
- Adonis.js
- Koa
- Sails.js

```jsx
npm install --save express //--save: install as production dependency
```

Express basics

```jsx
const http = require('http');
const express = require('express');
const app = express();

const server = http.createServer(app);
server.listen(8080);
```

**Middleware**

Express allows you to add some middleware functions to your server. 

3rd party functions may be used.

```jsx
const app = express();

app.use((req, res, next) => {
	console.log('first middleware unit');
	next();//move to next middle ware - exits if not there. 
});
app.use((req, res, next) => {
	console.log("second middleware");
	res.send('<h1>hello world</h1>');//res.send takes any type
});
```

**Shortcut**

The below code is the same as the ones above. Except it doesnt require http. This is because the listen function does this for you in the background. 

```jsx
const express = require('express');
const app = express();

app.listen(8080);//http.createServer(app) in the background. 
```

**Route handling in Express**

```jsx
const express = require('express');
const app = express();

app.use('/page1', (req, res, next) =>{
	res.send('<h1>Page 1</h1>');//serves up page one on page one route.
});
app.use('/', (req, res, next) => {
	res.send('<h1>default page</h1>');//serves up a defaul on all others
});
```

**Parsing requests**

```jsx
const express = require('express');
const bodyParser = require('body-parser);//npm install --save body-parser

const app = express();

app.use(bodyParser.urlEncoded({extended: false}));//registers a middleware function, calls next() implicitly
//extended for non default middleware
app.use('/add-product', (req, res, next) =>{
	res.send('<form action="/product" method="POST" ><input type="text" name="title"><button>Sumbit</button></input></form>'
})

app.use('/product', (req, res, next) =>{
	console.log(req.body);//outputs an object {title: someInput}
	res.redirect('/');
})
```

You may want to limit to responses to different types of request

```jsx
app.post('/product', (req, res, next) => {
	console.log(req.body)
	res.redirect('/');
}); // this will only work for post requests now. 
```

**Express router**

You may wish to split your routes up in to different files. By creating a 'routes' file. 

```jsx
//routes -> admin.js
const express = require('express');
const router = express.Router();// grab the express router

router.get('/add-product', (req, res, next)=>{
	res.send('<form action="/product" method="POST"><input><button>Sumbit</button></input></form>'
})//post method

router.post("/product", (req, res, next) => {
	res.redirect("/");//redirection
})

module.exports = router

```

```jsx
//your route file can now be used as an object in your main file
const express = require('express');
const bodyParser = require('body-parser'r);//npm install --save body-parser
const app = express();

const adminRoute = require("./routes/admin");
app.use(adminRoute);//this can now use the module

app.use("/", () => {
	res.send('<h1>Yeet</h1>');
})
```

**404 pages**

handle all other requests

```jsx
app.use(adminRoutes);//middleware routes
app.use(shopRoutes);

app.use((req, res, next) => {
		res.status(404).send("<h1>404 page not found :(</h1>");
})
```

**Path Filtering**

When you have routes with the same starting path you can add that starting path in to the use function

```jsx
app.use("/admin", adminRoutes);
```

```jsx
router.get('/add-product', (req, res, next)=>{
	res.send('<form action="admin/add-product" method="POST"><input><button>Sumbit</button></input></form>'
})//post method

router.post("/add-product", (req, res, next) => {
	res.redirect("/");//redirection
})

module.exports = router
```

**Dealing with html files**

You can create a html folder 'views' or something of the like. This can contain the general structure of what you're serving up. 

```jsx
const path = require('path'); //core module

router.get('/add-product', (req, res, next) => {
	res.sendFile(path.join(__dirname,'..', 'views', 'shop.html'));
//grab the directory adress with the paths aattached.
})
```

Serving static files

```jsx
//app.js
//directory where the file is found is what we serve up to path.join()
app.use(express.static(path.join(__dirname, 'public')) // Middleware for static files to give read access. 

//Main Body
<link rel='stylesheet' href='/css/main.css'> //some random file
//file requests are now handled by the app. 

//can be used to serve up css files in a html page

```
## REST API's

- HTTP generally has only two endpoint requests. GET and POST
- For web and others you have access to ...
    - GET
    - POST
    - PUT
    - PATCH
    - DELETE
    - others
    

REST Principles

- **Uniform interface** - clearly defined API endpoints with clearly defined request repsonse data structures.
- **Stateless interaction** - server and the client dont store any connection history, every request is handeled seperately.
- **Cacheable -** allow the server to cache the responses recieved for a time
- **Layered system** - Server may forward request to another API
- **Code on demand** - Executable code may betransfered to the client

START 

npm install —save express

npm install —save-dev nodemon

in package.js/scripts

"start" : "nodemon app.js"

Express can be used to build an API. Other frameworks can be used, aswell as vanilla node.js

```jsx
//APP.JS
const express = require('express');
const app = express();
app.listen(8080);

```

**Adding routes**

npm install —save body-parser

1. Start by creating a routes folder in the src file
2. You can store your routes in the routes folder

```jsx
//routes/feed.js
const express = require('express');

const router = express.Router();
//Here we can have our logic for handling routes
module.exports = router;
```

You can then create  a controllers file in the main src

```jsx
//controllers/feed.js
exports.getPosts(req, res, next) => {

}
```

Import the controllers in to the routes file

```jsx
//routes/feed.js
const express = require('express');
const feedController = require('../constollers/feed.js');

const router = express.Router();
//Here we can have our logic for handling routes
router.get('/posts', feedController.getPosts);
module.exports = router;
```

Route then has to accessed by main app.js

```jsx
//app.js
const express = require('express');

const feedRoutes = require('./routes/feed');
const app = express();

app.use(feedRoutes);//directs all routes
//or
app.use('/feed', feedRoutes);//directs routes beginning with /feed
app.listen(8080);
```

**All of this above would handle one type of request**

```jsx
const express = require('express');
const feedController = require('../constollers/feed.js');

const router = express.Router();
//Here we can have our logic for handling routes
router.get('/posts'. feedController.getPosts);
module.exports = router;
```

### **Handling requests with controllers**

We want to return something in a get request.

```jsx
//controllers/feed.js
exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [{title: 'first post', content: 'the first post'}]
	});
}
```

We can now start the server and route in [localhost:8080/feed/pos](http://localhost:8080/feed/poss)ts

This will return a JSON object

We can also send a post req

```jsx
//controllers/feed.js
exports.getPosts = (req, res, next) => {
	res.status(200).json({
		posts: [{title: 'first post', content: 'the first post'}]
	});
}
exports.createPosts = (req, res, next) => {
		const title = req.body.title; //we need some way of parsing this
		const content = req.body.content;
//create post in the DB
		res.status(201).json({
				message: 'post created succesfully',
				post: {id:new Date().ISOString(), title: title, content: content}
			})

}
```

**Parsing incoming requests**

```jsx
//app.js
const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const app = express();

app.use(bodyParser.json())

app.use('/feed', feedRoutes);
app.listen(8080);
```

**Testing requests using postman**

You can use postman as an easy way to test your routes when not connected to a front end

handling post routes

```jsx
//routes/feed.js
const express = require('express');
const feedController = require('../constollers/feed.js');

const router = express.Router();
//Here we can have our logic for handling routes
router.get('/posts',  feedController.getPosts);
router.post('/posts', feedController.createPosts);

module.exports = router;
```

**Allowing cross server communication  - CORS - using a client**

```jsx
const express = require('express');
const dataControl = require('./routes/dataRoute.js');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
//before we forward to our route we need to include a header. 
app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
})
app.use('/data', dataControl);

app.listen(8080);
console.log("Server running on port 8080");
```

### Get and Posts from a client

```jsx
postButton.addEventListner('click', () => {
	fetch('http://localhost:8080/data/temp', {
		method: 'POST', 
		body: JSON.stringify({
			title: 'client Title', 
			content: 'client content'
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	}
})
```

```jsx
getButton.addEventListner('click', () => {
	fetch('http://localhost:8080/data/temp')
	.then(res => res.json())
	.then(resData => console.log(resData))
	.catch(e => console.log(e))
})
```
{% /section %}
