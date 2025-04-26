import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
    title: string;
    artist: string;
    album?: string;
    releaseDate?: Date;
    genres: string[];
    versions: string[];
}

const songSchema: Schema = new Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String },
    releaseDate: { type: Date },
    genres: { type: [String], required: true },
    versions: { type: [String], default: [] }
});

const Song = mongoose.model<ISong>('Song', songSchema);

export default Song;