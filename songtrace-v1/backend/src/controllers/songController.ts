import { Request, Response } from 'express';
import { SongService } from '../services/songService';

export class SongController {
    private songService: SongService;

    constructor() {
        this.songService = new SongService();
    }

    public async createSong(req: Request, res: Response): Promise<void> {
        try {
            const songData = req.body;
            const newSong = await this.songService.createSong(songData);
            res.status(201).json(newSong);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getAllSongs(req: Request, res: Response): Promise<void> {
        try {
            const songs = await this.songService.getAllSongs();
            res.status(200).json(songs);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async getSongById(req: Request, res: Response): Promise<void> {
        try {
            const songId = req.params.id;
            const song = await this.songService.getSongById(songId);
            if (song) {
                res.status(200).json(song);
            } else {
                res.status(404).json({ message: 'Song not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async updateSong(req: Request, res: Response): Promise<void> {
        try {
            const songId = req.params.id;
            const updatedData = req.body;
            const updatedSong = await this.songService.updateSong(songId, updatedData);
            if (updatedSong) {
                res.status(200).json(updatedSong);
            } else {
                res.status(404).json({ message: 'Song not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    public async deleteSong(req: Request, res: Response): Promise<void> {
        try {
            const songId = req.params.id;
            const deleted = await this.songService.deleteSong(songId);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Song not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}