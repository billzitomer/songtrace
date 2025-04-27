import { Router } from 'express';
import SongController from '../controllers/songController';

const router = Router();
const songController = new SongController();

// Define routes for song-related endpoints
router.post('/songs', songController.createSong);
router.get('/songs', songController.getAllSongs);
router.get('/songs/:id', songController.getSongById);
router.put('/songs/:id', songController.updateSong);
router.delete('/songs/:id', songController.deleteSong);

export default router;