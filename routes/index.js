const express = require('express');
const router = express.Router();
const StravaController = require('../controllers/StravaController');

/*
 * Strava API Requests
 */
router.get('/activities/:page', async (req, res) =>
  res.send(await StravaController.activities(req.params.page))
);

router.get('/athletes/:id/stats', async (req, res) =>
  res.send(await StravaController.athleteStats(req.params.id))
);

router.get('/athlete/zones', async (req, res) =>
  res.send(await StravaController.athleteZones())
);

router.get('/segments/:id/updateleaderboard', async (req, res) =>
  res.send(await StravaController.updateSegmentLeaderboard(req.params.id))
);

router.get('/segments/:id/leaderboard', async (req, res) =>
  res.send(await StravaController.segmentLeaderboard(req.params.id))
);

router.get('/segments/:id/efforts', async (req, res) =>
  res.send(await StravaController.segmentListEfforts(req.params.id))
);

router.get('/segments/explore/:a_lat/:a_long/:b_lat/:b_long', async (req, res) =>
  res.send(await StravaController.segmentsExplore(req.params))
);

/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: 'Express' }));

module.exports = router;