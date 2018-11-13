const fs = require('fs');
const http = require('http');
const port = 3000;

const requestHandler = (req, res) => {
  res.end(`Handling a request on port ${port}`);
  fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf-8', (err) => {
    if (err) throw err;
    console.log('Successfully wrote to file!')
  })
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`Error message: ${err}`);
  }
  console.log(`Server is listening on ${port}`);
});n