# rest-map-server
Rest Mock and Proxy Server
 
Mock REST API endpoints, serve static files and work as proxy server.
 
It has a nice GUI, where user can mock a path very easily with few clicks.

# Installation
npm install -g rest-map-server

And rest-map-server will be installed globally to your system path.

# Usage
Using rest-map-server is simple, just pass a port number and an optional project public dir to serve static files, I would start it as so:

    map-server 8000 

    or

    map-server 8000 "/usr/mk/public"

http requests and error will be logged on the console.

## GUI configurations
### Setup page
when we open http://localhost:8000/setup-routes/

we will get the below setup page, here on this page we can add api route to mock. 

![Alt text](https://github.com/mayank-kansal15/snapshots/blob/master/setup-page.jpg?raw=true "Setup page")


On the right top setting button, click and add a global target server(Eg: https://localhost:4000) for all apis.

Unmocked routes will be forwarded to this server

![Alt text](https://github.com/mayank-kansal15/snapshots/blob/master/global-proxy-setting.jpg?raw=true "Global target server")

### Mock a route
Click on the "mock new route" button and provide route url and mock json response.

Note:

1. If we select mocking type as mocked which is the default option, mocked json response will be sent.

2. If we select mocking type as remote, request will be sent to global target server and corrosponding response will be sent back.

3. If we select mocking type as remote, and make "override global setting" switch on then request will be sent to this given target server and corrosponding response will be sent back.

![Alt text](https://github.com/mayank-kansal15/snapshots/blob/master/mock-route.jpg?raw=true "Global target server")

Now, after mocking route, if we goto "http://localhost:8000/api/v1/users", we will get our mocked json


Mocked routes and target server setting will be saved in json file, in the same dir from where server was started. So if you restart server this data will be loaded.

API routes which are not mocked will be forwarded to the global target server and corrosponding response will be sent back.

## Serving static files
If we goto "http://localhost:8000/" , and public dir is given then index.html from the public dir will be loaded.

# License
MIT [http://rem.mit-license.org](http://rem.mit-license.org)
