const express = require('express');
const routes = require('./routes/index');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'AnimeFreak API - 👋🌎🌍🌏',
    entries: [
      {
       "AnimeVideoHandler": "https://animefreak.vercel.app/api/v1/AnimeVideoHandler/:id",
       "OngoingAnime": "https://animefreak.vercel.app/api/v1/OngoingAnime",
       "Popular": "https://animefreak.vercel.app/v1/Popular",
       "LatestEpisodes": "https://animefreak.vercel.app/api/v1/LatestEpisodes/:page",
       "Movies": "https://animefreak.vercel.app/api/v1/Movies/:page",
       "Ova": "https://animefreak.vercel.app/api/v1/Ova/:page",
       "TV": "https://animefreak.vercel.app/api/v1/TV/:page",
       "Search": "https://animefreak.vercel.app/api/v1/Search/:query",
       "Genres": "https://animefreak.vercel.app/api/v1/Genres/:genre/:page",
      }
    ]
  });
});

router.use('/', routes);

module.exports = router;
