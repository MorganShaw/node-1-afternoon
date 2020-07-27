const products = require('../products.json');
// const getProducts = require('./getProducts');

const getProduct = (req, res) => {
    const item = products.find(val => val.id === +req.params.id);
    if(!item) {
        return res.status(500).send("Item not in list");
    }
    res.status(200).send(item);
}

module.exports = getProduct;


//can also use...const item = products.find(val => val.id === parseInt(req.params.id)); but the plus sign is an easier/cleaner way to coerce something into a number.

//Here, we're creating a handler function that we will insert into our get method as an argument (as the body). That's why we don't use app.get('...') in the const getProduct variable.

// Why is the second res.status on line 8 not in an if statement?

//Are semi-colons important in node?

//What exactly does the if(!item) mean? If the id is not an item in the list....?