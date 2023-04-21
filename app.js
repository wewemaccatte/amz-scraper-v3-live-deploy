const express = require('express');
const app = express();
const cors = require('cors');
const productRoutes = require('./routes/product');
const searchRoutes = require('./routes/search');

app.use(cors());
app.use('/api/product', productRoutes);
app.use('/api/search', searchRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
