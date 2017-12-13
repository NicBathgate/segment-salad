const express = require('express');
const router = express.Router();
const StravaController = require('../controllers/StravaController');

/*
 * Route API Requests
 */
router.get('/authenticate', async (req, res) =>
  res.send(await StravaController.authenticate())
);

router.get('/activities/:page', async (req, res) =>
  res.send(await StravaController.activities(req.params.page))
);

router.get('/activities/segments/:page', async (req, res) =>
  res.send(await StravaController.scanAllActivitiesForNewSegments(req.params.page))
);

router.get('/list_clubs', async (req, res) =>
  res.send(await StravaController.list_clubs())
);

router.get('/clubs/:id/segments', async (req, res) =>
  res.send(await StravaController.segmentsByClub(req.params.id))
);

router.get('/athletes/:id/stats', async (req, res) =>
  res.send(await StravaController.athleteStats(req.params.id))
);

router.get('/athletes/:id/segments', async (req, res) =>
  res.send(await StravaController.segmentPBsForAthlete(req.params.id))
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

/*
 * Unused
 */
router.get('/maintenance/updateathleteids', async (req, res) =>
  // Used to get athlete ids that were missing from data
  res.send(await StravaController.updateEffortsForAllSegments())
);

router.get('/maintenance/updateallleaderboards', async (req, res) =>
  // Used to get efforts that were missing from data
  res.send(await StravaController.updateAllLeaderboards())
);


/* GET home page. */
router.get('/', (req, res, next) => res.render('index', { title: 'Express' }));

module.exports = router;