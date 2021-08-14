# Nodejs App to emulate a IoT device
 

The main purpose of this project is to emulate asynchronous  communication of a IoT device to driver.

[Link to the Driver version of APP](https://github.com/JOELJOSEPHCHALAKUDY/node-async-driver)

- Development time taken project

```
30 minutes for brainstorming
1.5 hours for Developement
```

# Pre-reqs

To build and run this app locally you will need a few things:
- Install [Node.js](https://nodejs.org/en/)
- Install [VS Code](https://code.visualstudio.com/)
- MQTT Broker [Mosquitto](https://test.mosquitto.org/)

# Getting started

- Clone the repository
```
git clone --depth=1 https://github.com/JOELJOSEPHCHALAKUDY/node-async-device.git
```

- Install dependencies
```
cd <project_name>
npm install
```

- Configure your env file

```
# create a .env file in the root folder and copy the content below
 intMQUsername=''

 intMQPassword=''

 intMQClientId=''

 intMQHost='mqtt://test.mosquitto.org'

 intMQPort=1883

```

- Run the project

```
nodemon
```
OR
```
npm start
```

- Device response to request from driver

```
Device is online : Sat Jul 17 2021 14:07:06 GMT+0530 (India Standard Time)
Listening...
Received request from driver as ASCII:   123 34 112 97 114 97 109 95 110 97 109 101 34 58 34 116 101 109 112 101 114 97 116 117 114 101 34 44 34 114 101 113 117 101 115 116 95 116 121 112 101 34 58 34 99 111 109 109 97 110 100 34 125
Received request from driver as string:  {"param_name":"temperature","request_type":"command"}
Received : { param_name: 'temperature', request_type: 'command' }
param_name temperature
Initating a 3 second delay to emulate slow network...
Sending resonse to driver...
```

> **Note!** Make sure you have already have  installed nodemon as global dependency or dev dependency `npm install -g nodemon` othewise you may encounter following error:- nodemon is not recognized as internal or external command, operable program or batch file


Finally, 

# Deploying the app
There are many ways to deploy an Node app, and in general, nothing about the deployment process changes here 

