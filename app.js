const express = require('express');
const app = express();

const productRoutes = require('./routes/product');
const searchRoutes = require('./routes/search');
const cors = require('cors');
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use('/api/product', cors(corsOptions), productRoutes);
app.use('/api/search', cors(corsOptions), searchRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
