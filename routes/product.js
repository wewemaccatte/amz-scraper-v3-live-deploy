const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request-promise');
const router = express.Router();

router.get('/:asin', async (req, res) => {
    const asin = req.params.asin;
    const url = `https://proxy.scrapeops.io/v1/?api_key=344c17ee-78a2-48ab-97d4-aecb0b7de75f&url=https://www.amazon.it/dp/${asin}`;

    try {
        const data = await request(url);
        const $ = cheerio.load(data);

        const title = $('#productTitle').text().trim();
        const price = $('#corePrice_feature_div span.a-offscreen').text().trim();
        const image = $('#landingImage').attr('src');

        const product = {
            title,
            price,
            image
        };

        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

module.exports = router;
