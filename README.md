# rest-map-server
rest-map-server =&gt; Rest Mock  &amp; Proxy Server
 
rest-map-server help us to mock the REST API endpoints. It can be used to server static files from a dir.
 
It can also be used to work as a proxy server. In case of proxy server, the target server can be same or all api or target server can be different for some api paths.
 
It has a nice GUI, where user can mock a path very easily with few clicks.

# Installation
npm install -g rest-map-server

And rest-map-server will be installed globally to your system path.

# Usage
Using rest-map-server is simple, just pass a port number and an optional project public dir to serve static files, I would start it as so:

    map-server 8000 "/usr/mk/public"

http requests and error will be logged on the console.

## GUI configurations
### Setup page
when we open http://localhost:8000/setup-routes/

we will get the below setup page, here on this page we can add api route to mock. 

On the right top setting button, click and add a global target server(Eg: https://localhost:4000) for all apis.

![Alt text](https://github.com/mayank-kansal15/snapshots/blob/master/setup-page.jpg?raw=true "Setup page")

### Mock a route
Click on the "mock new route" button and provide route url and mock json response.

Note:

1. If we select mocking type as mocked which is the default option, mocked json response will be sent.

2. If we select mocking type as remote, request will be sent to global target server and corrosponding response will be sent back.

3. If we select mocking type as remote, and make "override global setting" switch on then request will be sent to this given target server and corrosponding response will be sent back.

Mocked routes and target server setting will be saved in json file, in the same dir from where server was started. So if you restart server this data will be loaded.

API routes which are not mocked will be forwarded to the global target server and corrosponding response will be sent back.

## Serving static files
If we goto "http://localhost:8000/" , and public dir is given then index.html from the public dir will be loaded.

# License
MIT [http://rem.mit-license.org](http://rem.mit-license.org)
