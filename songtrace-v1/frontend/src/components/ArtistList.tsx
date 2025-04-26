import React, { useEffect, useState } from 'react';
import { fetchArtists } from '../services/apiService';

const ArtistList: React.FC = () => {
    const [artists, setArtists] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getArtists = async () => {
            try {
                const data = await fetchArtists();
                setArtists(data);
            } catch (err) {
                setError('Failed to fetch artists');
            } finally {
                setLoading(false);
            }
        };

        getArtists();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Artist List</h2>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistList;