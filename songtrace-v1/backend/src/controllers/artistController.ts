import { Request, Response } from 'express';
import ArtistService from '../services/artistService';

class ArtistController {
    private artistService: ArtistService;

    constructor() {
        this.artistService = new ArtistService();
    }

    public async createArtist(req: Request, res: Response): Promise<void> {
        try {
            const artistData = req.body;
            const newArtist = await this.artistService.createArtist(artistData);
            res.status(201).json(newArtist);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getAllArtists(req: Request, res: Response): Promise<void> {
        try {
            const artists = await this.artistService.getAllArtists();
            res.status(200).json(artists);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getArtistById(req: Request, res: Response): Promise<void> {
        try {
            const artistId = req.params.id;
            const artist = await this.artistService.getArtistById(artistId);
            if (artist) {
                res.status(200).json(artist);
            } else {
                res.status(404).json({ message: 'Artist not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateArtist(req: Request, res: Response): Promise<void> {
        try {
            const artistId = req.params.id;
            const artistData = req.body;
            const updatedArtist = await this.artistService.updateArtist(artistId, artistData);
            if (updatedArtist) {
                res.status(200).json(updatedArtist);
            } else {
                res.status(404).json({ message: 'Artist not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteArtist(req: Request, res: Response): Promise<void> {
        try {
            const artistId = req.params.id;
            const deleted = await this.artistService.deleteArtist(artistId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Artist not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default ArtistController;