const cheerio = require('cheerio');
const cron = require('node-cron');
const axios = require('axios');
function start() {
    console.log("daje ho iniziato il cron")
async function searchProducts(query) {
    const response = await axios.get(`https://amz-scraper-v3-live.vercel.app/api/search/${query}`);
    return response.data;
}


async function checkProductPrice(product) {
    console.log(product)
}

// cron.schedule('0 10 * * *', async () => {
    async function daje() {
        const products = await searchProducts('3070');
        for (const product of products) {
            await checkProductPrice(product);
        }
    }
    setTimeout(()=>{
        daje()
    }, 200)
// });
}
module.exports = { start };
