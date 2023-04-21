const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/product');
const searchRoutes = require('./routes/search');

app.use(cors());
app.use('/api/product', productRoutes);
app.use('/api/search', searchRoutes);
module.exports = (req, res) => {
    //set header first to allow request or origin domain (value can be different)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, OPTIONS, DELETE');

//---- other code

    //Preflight CORS handler
    if(req.method === 'OPTIONS') {
        return res.status(200).json(({
            body: "OK"
        }))
    }

}
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
