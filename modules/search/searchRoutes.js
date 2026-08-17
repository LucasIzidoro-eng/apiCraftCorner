const express = require('express');
const router = express.Router();
const searchController = require('./searchController');

// Busca global por vídeos e usuários. Rota pública.
router.get('/search', searchController.search);

module.exports = router;