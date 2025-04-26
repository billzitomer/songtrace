import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import apiService from '../services/apiService';

const ArtistDetail: React.FC = () => {
    const { artistId } = useParams<{ artistId: string }>();
    const [artist, setArtist] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtistDetails = async () => {
            try {
                const response = await apiService.getArtistById(artistId);
                setArtist(response.data);
            } catch (err) {
                setError('Failed to fetch artist details');
            } finally {
                setLoading(false);
            }
        };

        fetchArtistDetails();
    }, [artistId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{artist.name}</h1>
            <p>{artist.bio}</p>
            <h2>Albums</h2>
            <ul>
                {artist.albums.map((album: any) => (
                    <li key={album.id}>{album.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ArtistDetail;