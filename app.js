const express = require('express');
const app = express();

const productRoutes = require('./routes/product');
const searchRoutes = require('./routes/search');
const cors = require('cors');
app.use(cors({origin: '*'}));
app.use('/api/product', productRoutes);
app.use('/api/search', searchRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started');
});
