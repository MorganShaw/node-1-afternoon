const products = require('../products.json');

const getProducts = (req, res) => {
    res.status(200).send(products);
}

app.get('')

module.exports = getProducts;