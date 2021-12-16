import { Router } from 'express'
const router = Router();

import * as controllerVideo from '../controller/videos.controlloer';

router.get('/videos', controllerVideo.getVideo)
router.get('/video/:id', controllerVideo.getVideoById)
router.post('/video',controllerVideo.createVideo)
router.put('/video/:id',controllerVideo.updateVideo)
router.delete('/video/:id',controllerVideo.deleteVideo)

export default router 