const router = require('express').Router();
const miapi = require('../modules/miapi');


///////////////////////////////////////////////
/////////    MIA API Searches    //////////////
///////////////////////////////////////////////
router.get('/id/:id', async (req, res) => {
  try {
    const result = await miapi.getArtById(req.params.id);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    throw new Error('********* Error in /routes/id/:id', err);
  }
});

router.get('/search/:query', async (req, res) => {
  try {    
    const result = await miapi.searchForArt(req.params.query);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    throw new Error('********* Error in /routes/search/:query', err)
  }
});

router.get('/image/:id/:size', async (req, res) => {
  try {
    const { id, size } = req.params;
    const result = await miapi.getImage(id, size);
    res.send(result);
  } catch (err) {
    res.sendStatus(500);
    throw new Error('********* Error in /routes/image/:id/:size', err)
  }
});

module.exports = router;