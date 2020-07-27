const express = require('express');
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')

const app = express();

const port = 4000;

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});


//How do we know which port to use? Don't use in the 3000s. 
//Why is the file not showing up? It's looking for index.js in the wrong file path. Look in package.json (when it was initialized with npm install, the path was straight to index.js, but then we nested index.js inside the server folder; had to update 'main' to the new file path).

//High-level concept questions:
//So what are we actually doing here? We're building a backend/server. But what does it mean to add endpoints? Are we defining how a client can request information? Is the client the front-end programming (like React)? Or the computer that runs the front-end programming? (It's not the developer or the person using the app -- not the developer...right?). We build front-end with react (build front-end client??) and build back-end with node.
