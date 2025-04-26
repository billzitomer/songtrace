import express from 'express';
import mongoose from 'mongoose';
import songRoutes from './routes/songRoutes';
import artistRoutes from './routes/artistRoutes';
import authRoutes from './routes/authRoutes';
import { json, urlencoded } from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes
app.use('/api/songs', songRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/auth', authRoutes);

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/songtrace', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});