import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';

const SongList: React.FC = () => {
    const [songs, setSongs] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await apiService.getSongs();
                setSongs(response.data);
            } catch (err) {
                setError('Failed to fetch songs');
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Song List</h2>
            <ul>
                {songs.map(song => (
                    <li key={song.id}>
                        {song.title} by {song.artist}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;