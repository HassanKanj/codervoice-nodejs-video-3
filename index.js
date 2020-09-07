const express = require('express');
const app = express();

const port = 5000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(port, function() {
    console.log(`Listening to port ${port}`);
});


app.get('/', function(request, response) {
    response.render('pages/home');
});

app.get('/products', function(request, response) {
    let products = [];
    products.push({
        'name': 'laptop',
        'price': '1000$'
    });

    products.push({
        'name': 'car',
        'price': '15000$'
    });

    products.push({
        'name': 'microwave',
        'price': '120$'
    });

    response.render('pages/products', {
        items: products
    })

});





