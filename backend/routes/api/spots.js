const express = require('express')

const router = express.Router();

const { Spot } = require('../../db/models');




router.get('/', async (req, res) =>
{

    const place = await Spot.findAll()

    console.log(place)

    
    console.log(place,'this is the place')
    return res.json({ place});
}
);



//Get all Spots owned by the Current User
router.get('/current', async (req, res) =>
{

    // const place = await Spot.findAll()
    // console.log(place,'this is the place')
    // return res.json({ place });
}
);





module.exports = router;