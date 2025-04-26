import React from 'react';

interface SongDetailProps {
    song: {
        title: string;
        artist: string;
        album: string;
        releaseDate: string;
        genre: string;
        lyrics: string;
    };
}

const SongDetail: React.FC<SongDetailProps> = ({ song }) => {
    return (
        <div className="song-detail">
            <h2>{song.title}</h2>
            <h3>Artist: {song.artist}</h3>
            <p><strong>Album:</strong> {song.album}</p>
            <p><strong>Release Date:</strong> {song.releaseDate}</p>
            <p><strong>Genre:</strong> {song.genre}</p>
            <h4>Lyrics:</h4>
            <pre>{song.lyrics}</pre>
        </div>
    );
};

export default SongDetail;