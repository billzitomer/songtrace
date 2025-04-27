import React, { useEffect, useState } from 'react';
import { getSongs, deleteSong } from '../services/apiService';

const AdminPage: React.FC = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchSongs = async () => {
            const fetchedSongs = await getSongs();
            setSongs(fetchedSongs);
        };

        fetchSongs();
    }, []);

    const handleDelete = async (id: string) => {
        await deleteSong(id);
        setSongs(songs.filter(song => song.id !== id));
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <h2>Manage Songs</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {songs.map(song => (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>
                                <button onClick={() => handleDelete(song.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;