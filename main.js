app.get('/webhook/', function (req, res) {
  if (req.query['hub.verify_token'] === 'lol') {
    res.send(req.query['hub.challenge']);
  }
  res.send('Error, wrong validation token');
})
