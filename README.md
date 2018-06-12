# vidly

Open Terminal...
"node --version"
Download LTS version
	Continue, Continue, Install

In Terminal...
mkdir first-app
cd first-app
code .
create a file called app.js

Like "window.console.log" works the same as "console.log" in a browser,
Node doesn't have "window". It instead has "global.console.log".



How to install a specific version of npm in terminal. You can do this even though npm is already installed because it comes with node installation.
npm i -g npm@5.5.1

STARTING NEW PROJECT=======================
Before adding any node packages to your application in the empty project folder, you need to create a package.json--a json file that includes some basic info about your app or project, like name, version, author, address of github. Basically metadata about your app.
npm init
press enter if default is acceptable within parenthesis

Before adding any node packages to your application, you need to create a package.json file. 
npm init --yes
The yes flag allows you to bypass the questions




npm i underscore
npm install underscoree


See dependencies with depth
npm list

See dependencies of your application
npm list --depth=0

View package.json file of mongoose library
npm view mongoose
npm view mongoose dependencies
npm view mongoose versions

npm i mongoose@2.4.2

npm outdated
npm update

Update major release #
npm i -g npm-check-updates
npm-check-updates
ncu -u
npm i
npm outdated


Separating developmental tools in the package.json
npm i jshint --save-dev


Uninstalling a package
npm uninstall mongoose
npm un mongoose


npm -g outdated
npm un -g <name of global package>



Making your own Package
mkdir lion-lib
cd lion-lib/
npm init --yes
code .     (opens the text editor)
create a file called index.js


Install nodemon globally, so we can run it anywhere
npm i -g nodemon



if the client asks for a resource and it doesn't exist, then it's:
404

express.js.com has a 3rd party middleware list
npm i helmet


On the topic of development or production environments, one good package for configuration is:
npm rc
npm i config (better without bugs; less popular)
After installing, create a "config" folder and in that folder, create a "default.json" file with contents:
{
	"name: "My Express App"
}

Create another file called "development.json" with contents. You can overwrite existing default's name property or add more:
{
	"name": "My Express App - Development",
	"mail": {
		"host": "dev-mail-server" // Complex object
	}
}

Create another file called "production.json" with contents:
{
	"name": "My Express App - Production",
	"mail": {
		"host": "prod-mail-server"
	}
}

In console, use:
set NODE_ENV=production
which the config module will then look in the /config/production.json and get the "name" property.

Since you don't want to store application secrets like password of your db or mail server because you don't want to check in the password in source control.

Don't use the first one so it doesn't clash with other apps on your machine.
set password=1234
set app_password=1234

Create another file in the config folder and call it:
"custom-environment_variables.json"
The name of this file is very important. We define the mapping of configuration settings to environment variables. Copy the contents of development.json into here.


DEBUGGING============================
In regards to using console.log() to debug areas of your code. You may delete or forget to delete the statement when you're done debugging, or you may need them again. This approach is very tedious. A better way to log messages for the purpose for debugging, is to use the debug package in node. We're going to replace all the console.log() statements with a call to a debug function and then we can use an environment variable to enable or disable debugging. We can also determine the level of debugging information we want to see.

In terminal,
npm i debug

In console, write:
set DEBUG=app:startup
That means we're only going to see debugging message that are part of this namespace.
To disable it, write:
set DEBUG=

To see debugging messages from multiple namespaces:
set DEBUG=app:startup,app:db

To see all debugging messages, use a wildcard
set DEBUG= app:*

Shortcut all at once:
DEBUG=app:db nodemon index.js


TEMPLATING ENGINES
Sometimes we want to return HTML markup to client instead of JSON objects in the response

-Pug
-Mustache
-EJS

How to generate dynamic HTML and returning it to the client:
npm i pug

place this below the require lines. You don't have to use a require if you use this as Express will load it with this line:
app.set('view engine', 'pug');

create a folder called views in the app parent directory with file index.pug with HTML

app.set('views', './views'); // optional. './views' is the default path


ASYNCHRONOUS
-Synchronous or blocking program
-Async does not mean concurrent or multi-threaded.
-In this app/program, we have a single thread.
-In Node programs, when you're dealing with operations that involve disk or network access, you're dealing with async code.
-Know how to write async code in a clean and maintainable way.

-There are 3 patterns to deal with async code
Callbacks
Promises
Async/await (syntactical sugar over Promises)

Promise
	-3 states
		-Pending
		- ... do some async operation
		-Fulfilled or Rejected


MONGO DB============================
Download and install MongoDB
Download and install Compass
Edit the System Variables (bottom portion) of Environment Variables window to change the "Path". Edit, New, and paste the C:\Program Files\MongoDB\Server\3.6\bin

When you run mongod in terminal. You will get an error about not having a directory. Make the directory yourself: C:\data\db

Mongoose gives us a simple API to work with the MongoDB database.


