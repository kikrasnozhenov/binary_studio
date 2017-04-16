var Hapi = require('hapi');
var server = new Hapi.Server();
server.connection({ port: 3000 });

var recipes = [];

server.register(require('inert'), function (err) {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/index.html');
    }
  });
});

server.route({
  method: 'GET',
  path: '/{param*}',
  handler: {
    directory: {
      path: './public/'
    }
  }
});

server.route({
  method: 'POST',
  path: '/api/recipe',
  handler: function (request, reply) {
    var recipe = request.params.recipe;
    recipes.push(recipe);
    reply(recipe);
  }
});

server.route({
  method: 'GET',
  path: '/api/recipe',
  handler: function (request, reply) {
    var recipe = request.params.recipe;
    reply(recipe);
  }
});

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
