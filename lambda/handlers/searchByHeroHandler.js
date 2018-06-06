'use strict';
const Speech = require('ssml-builder');
const Alexa = require('alexa-sdk');
const lgtv = require("lgtv");
const searchByHeroHandler = Alexa.CreateStateHandler('', {


    NewSession: function () {
        console.log(" you are new session");
        
       /* var speech = new Speech();
            speech.say("HELLO")
                .pause('1s')
                .say('fellow Alexa developers')
                .pause('500ms')
                .say('Testing phone numbers')
                .sayAs({
                    word: "+1-377-777-1888",
                    interpret: "telephone"
                });
            var speechOutput = speech.ssml(true);
            this.emit(':tell', speechOutput); */

       discoverMyTV().then((result) => { var speech = new Speech();
            speech.say("HELLO")
            .pause('1s')
            .say('fellow Alexa developers')
            .pause('500ms')
            .say('Testing phone numbers')
            .sayAs({
                word: "+1-377-777-1888",
                interpret: "telephone"
            });
        var speechOutput = speech.ssml(true);
        this.emit(':tell', speechOutput);});

    },
    Unhandled: function () {
        this.emitWithState('NewSession');
    },

    'AMAZON.StopIntent': function () {
    },

    'AMAZON.CancelIntent': function () {
    },

    SessionEndedRequest: function () {
    },
});

const discoverMyTV = () => new Promise((resolve, reject) => {

    var tv_ip_address = "192.168.1.79";
lgtv.connect("192.168.1.79", function(err, response){
  if (!err) {
    lgtv.show_float("It works!", function(err, response){
      if (!err) {
        lgtv.disconnect();
      }
    }); // show float
  }
  resolve("resolved");
});
    var retry_timeout = 0; // seconds
    let tvFindLog = '';
   /* lgtv.discover_ip(retry_timeout, function (err, ipaddr) {
        console.log('iiiiii')
        if (err) {
            tvFindLog = "Failed to find TV IP address on the LAN. Verify that TV is on, and that you are on the same LAN/Wifi.";
        } else {
            tvFindLog = "TV ip addr is: " + ipaddr;
        }
        resolve(tvFindLog);
    }); */
});

module.exports = searchByHeroHandler;