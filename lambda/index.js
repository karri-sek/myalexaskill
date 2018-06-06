const Alexa = require('alexa-sdk');
const AWS = require('aws-sdk');


const searchHeroSongsHandlers = require('./handlers/searchByHeroHandler');
exports.handler = function (event, context) {

   console.log(" here");
  const alexa = Alexa.handler(event, context);
  

  alexa.registerHandlers(
    searchHeroSongsHandlers,
  );
  alexa.execute();
};
