
var controllers = require('../app/controllers');

module.exports = function (app) {
  /*app.get( '/'           , controllers.home);
  app.get( '/user'       , controllers.user.list);
  app.post( '/user'      , controllers.user.create);
  app.get( '/user/:id'   , controllers.user.get);
  app.put( '/user/:id'   , controllers.user.edit);
  app.delete( '/user/:id', controllers.user.delete);*/
  app.get('/users', function(req, res, next) {
    var result = controllers.user.list();
    res.status('users').json(result);
  });
};
