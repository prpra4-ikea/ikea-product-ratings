const express = require('express');
const cors = require('cors');
const { Sequelize, Model, DataTypes } = require('sequelize');
const app = express();

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

// Define User model
class User extends Model {}
User.init({
    product_type: DataTypes.STRING,
    product_name: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    comment: DataTypes.STRING,
}, { sequelize, modelName: 'product' });
    

// Sync models with database
sequelize.sync();

const products = [
    { product_type: "Bedroom",  product_name: "Bedframe",rating: 4,comment: "Good"},
    { product_type: "Living room",  product_name: "Wardrobe",rating: 4,comment: "Good"},
    { product_type: "Kitchen",  product_name: "Table",rating: 4,comment: "Good" }
];


app.use(cors());
app.use(express.json());
app.use(express.static('react-frontend/dist'));

app.get("/", (req, res) => {
    res.json({ data: 'Hello Ikea!' });
});

app.get('/api/seeds', async (req, res) => {
    users.forEach(product => Product.create(product));
    res.json(products);
});

app.get('/api/products', async (req, res) => {
    const products = await User.findAll();
    res.json(products);
});

app.get("/api/products/:id", async (req, res) => {
    const user = await Product.findByPk(req.params.id);
    res.json(product);
});

app.post('/api/products', async (req, res) => {
    const user = await Product.create(req.body);
    res.json(product);
});

app.put("/api/products/:id", async (req, res) => {
    const { product_type, product_name, rating } = req.body;

    const product = await Product.findByPk(req.params.id);
    await product.update({ name, isAdmin });
    await product.save();
    res.json(product);
});

app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id);
    await product.destroy();
    res.json({data: `The product with id of ${req.params.id} is removed.`});
});

const port = process.env.PORT || 8080;
server =  app.listen(port, async () => {
    console.log(`Server started at ${port}`)
});
module.exports = {app, server}

//app.listen('8080', () => { })