import { Router } from 'express';
import ArtistController from '../controllers/artistController';

const router = Router();
const artistController = new ArtistController();

// Define routes for artist-related endpoints
router.get('/', artistController.getAllArtists.bind(artistController));
router.get('/:id', artistController.getArtistById.bind(artistController));
router.post('/', artistController.createArtist.bind(artistController));
router.put('/:id', artistController.updateArtist.bind(artistController));
router.delete('/:id', artistController.deleteArtist.bind(artistController));

export default router;