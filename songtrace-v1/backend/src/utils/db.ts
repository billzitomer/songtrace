import { Sequelize } from 'sequelize';

// Initialize a new Sequelize instance for database connection
const sequelize = new Sequelize({
    dialect: 'sqlite', // or 'mysql', 'postgres', etc.
    storage: './database.sqlite', // Path to the database file
});

// Test the database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

// Export the sequelize instance and the test connection function
export { sequelize, testConnection };