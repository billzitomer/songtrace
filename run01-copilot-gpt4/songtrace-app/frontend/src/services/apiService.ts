import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const getSongs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/songs`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching songs: ' + error.message);
    }
};

export const getSongById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/songs/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching song: ' + error.message);
    }
};

export const createSong = async (songData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/songs`, songData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating song: ' + error.message);
    }
};

export const updateSong = async (id, songData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/songs/${id}`, songData);
        return response.data;
    } catch (error) {
        throw new Error('Error updating song: ' + error.message);
    }
};

export const deleteSong = async (id) => {
    try {
        await axios.delete(`${API_BASE_URL}/songs/${id}`);
    } catch (error) {
        throw new Error('Error deleting song: ' + error.message);
    }
};