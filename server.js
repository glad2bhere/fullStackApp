/* Steps to set up and run
1. Run the server and console log => run "node server.js" in terminal to set up local host
2. Create json with "npm init"
3. Run Nodemon (npm install -D nodemon) to keep server running and dont need to restart - this can be found by modifying json property server.js to nodemon server.js:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"
4. npm start to start server
5. run http://localhost:5000 in Postman to see results
*/

//setting up a simple server

const http = require('http');

//This will be data from a database and not in app itself. This is just for exmample sake for below
const todos = [
    {id: 1, text: 'todo one' },
    {id: 2, text: 'todo two' },
    {id: 3, text: 'todo three' }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('X-Powered-By', 'Node.js');
   
    res.write('Hello');
    res.write('<h1>Hello</h1>');
    res.write('<h2>Hello again</h2>');
    res.end(JSON.stringify({ 
        success: true,
        data: todos
    }));
    //Will show a users authorization in the header
    console.log(req.headers.authorization);
}); //Postman http://localhost:5000 and will get this response in the body

//Create Port for server to run on
const PORT = 5000;

server.listen(PORT, () => console.log(`Server RUnning onn Port${PORT}`));