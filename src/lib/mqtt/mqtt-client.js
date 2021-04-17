
var mqtt = require('mqtt');
var options = {
    // protocol: 'mqtts',
    // protocol: 'ws',
    // host: 'wss://mqtttest.connio.cloud/mqtt',
    // port: 8083,
    clientId: 'digiterra-coding-task-1',
    setMaxListeners: 100
};

var client = mqtt.connect('wss://mqtttest.connio.cloud:8083/mqtt', options);

client.on('connect', () => {
    console.log('mqtt connected')
})


client.on('error', (err) => {
    if (err) {
        console.log('mqtt error', err)
    }
})

client.subscribe('9921topics')



export default client;