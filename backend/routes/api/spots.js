const express = require('express')

const router = express.Router();

const { Spot } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');



//Get all spots
router.get('/', async (req, res) =>
{
    const place = await Spot.findAll()
    return res.json({ place});
}
);



//Get all Spots owned by the Current User
router.get('/current',requireAuth, async (req, res) => {

    const place = await Spot.findAll({
        attributes: ['foo', 'bar']
    })
    
    return res.json({ place});

});








module.exports = router;