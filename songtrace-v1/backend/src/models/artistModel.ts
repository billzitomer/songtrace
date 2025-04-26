import mongoose, { Schema, Document } from 'mongoose';

export interface IArtist extends Document {
    name: string;
    genre: string;
    albums: string[];
    bio?: string;
}

const artistSchema: Schema = new Schema({
    name: { type: String, required: true },
    genre: { type: String, required: true },
    albums: { type: [String], default: [] },
    bio: { type: String, default: '' }
});

const Artist = mongoose.model<IArtist>('Artist', artistSchema);

export default Artist;