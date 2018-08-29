const WitSpeech = require('node-witai-speech');
const fs = require('fs');
const record = require('node-record-lpcm16');


// Stream the file to be sent to the wit.ai
//var stream = fs.createReadStream("hello.wav"); // English
var stream = fs.createReadStream("bonjour.wav"); // French

// The wit.ai instance api key
var API_KEY = "U6NOYN54EX5OVQ75R2P65HQ6JUOL4PW6"; // English
//var API_KEY = "OFATXR4US2YKDBVHHDZZ3YWYLGWQ6QUJ"; // French

// The content-type for this audio stream (audio/wav, ...)
var content_type = "audio/wav";

// Its best to return a promise
var parseSpeech =  new Promise((ressolve, reject) => {
    // call the wit.ai api with the created stream
    WitSpeech.extractSpeechIntent(API_KEY, stream, content_type,
    (err, res) => {
        if (err) return reject(err);
        ressolve(res);
    });
});

// check in the promise for the completion of call to witai
parseSpeech.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
