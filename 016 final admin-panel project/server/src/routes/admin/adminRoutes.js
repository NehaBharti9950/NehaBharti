const express  = require('express');
const adminLogin = require('../../controllers/admin/adminLogin');

const adminRoutes = express.Router();


adminRoutes.post('/login' , adminLogin)

module.exports = adminRoutes;


