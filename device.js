global.__base = __dirname + '/';
global.uptime = Date.now();

// load enviornment if development mode
if (process.env.prod !== 'yes') {
    require('dotenv').config();
}


const mqttService = require(__base + "app/service/mqtt");


// subscribe to communication topic 
mqttService.subscribe('labforward/device-commands/req', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening...')
    }
});

// capture incoming messages 
mqttService.on('message', function (topic, message, packet) {
    if (topic == `labforward/device-commands/req`) {

        // console.info('packets',packet);
        let string_message = message.toString();
        let ascii_payload = '';
        for (var i = 0; i < string_message.length; i++) {
            ascii_payload += ` ${string_message.charCodeAt(i)}`;
        }
        console.info('Received request from driver as ASCII: ', ascii_payload);
        console.info('Received request from driver as string: ', string_message);
        let parsedMessage = JSON.parse(string_message);
        console.info(`Received :`, parsedMessage);
        let param_name = parsedMessage['param_name'];
        console.info('param_name', param_name);

        // custom processing logic
        switch (param_name) {
            case 'weight-value':
                sendMessage(`100.00g`)
                break;
            case 'temperature':
                sendMessage('28°C')
                break;
            case 'battery-level':
                sendMessage('49%')
                break;
            default:
                sendMessage('command not recognized.');
        }
    }
});



const sendMessage = (value) => {
    //publish response to driver
    console.log('Initating a 3 second delay to emulate slow network...');

    // please note that timeout is not required here for realife scenario and should be removed when used in production
    // timeout was added here to emulate slow network or processing time
    setTimeout(function () {
        mqttService.publish(`labforward/device-commands/res`, `{"response":"${value}"}`, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Sending resonse to driver...`);
                console.log(' ');
            }
        });
    }, 3000);
}
