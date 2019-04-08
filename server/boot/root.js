'use strict';

module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());
  router.get('/about', (req, res)=>{
    res.redirect('/index.html');
  });
  router.get('/services', (req, res)=>{
    res.redirect('/');
  });
  router.get('/signup', (req, res)=>{
    res.redirect('/');
  });
  router.get('/collection', (req, res)=>{
    res.redirect('/');
  });
  router.get('/login', (req, res)=>{
    res.redirect('/');
  });
  router.get('/home', (req, res)=>{
    res.redirect('/');
  });
  server.use(router);
};
