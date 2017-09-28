var seneca = require('seneca')();

seneca.add({component: 'greeter'}, function(msg, respond){
    respond(null, {message: 'Hello ' + msg.name});
});

seneca.act({component: 'greeter', name: 'GNOME'}, function(error, response){
    if(error)  return console.log(error);
    console.log(response.message);
});
