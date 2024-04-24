Bug #1: app.js General error handler does not handle asynchronous errors properly.
  // TESTS BUG #1
it('should handle asynchronous errors in routes/middleware', async () => {
    // Simulate an asynchronous error (e.g., database query or API call)
    await expect(asyncFunctionThatThrowsError()).rejects.toThrow();
});

// BUG FIX #1
// Example route with asynchronous error handling
app.get('/example-route', async (req, res, next) => {
    try {
        // Simulate an asynchronous operation (e.g., database query)
        const result = await asyncFunctionThatMayThrowError();
        res.json(result);
    } catch (err) {
        // Pass the error to the next middleware (general error handler)
        next(err);
    }
});





Bug #2: config.js Incorrect dotenv configuration
// TESTS BUG #2
it('should load environment variables from .env file', () => {
    // Check if the environment variables are defined after loading dotenv
    require('dotenv').config();
    expect(process.env.SECRET_KEY).toBeDefined();
    expect(process.env.PORT).toBeDefined();
    expect(process.env.NODE_ENV).toBeDefined();
});

//BUG FIX #2
require('dotenv').config();

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3000;

const BCRYPT_WORK_FACTOR = 10;

const DB_URI =
  process.env.NODE_ENV === 'test'
    ? 'postgresql:///bankly_test'
    : 'postgresql:///bankly';

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};





Bug #3: db.js Database connection setup may not handle errors properly
// TESTS BUG #3
it('should handle database connection errors', async () => {
    // Create a mock DB URI that is likely to fail
    const mockDBURI = 'postgresql://invalid-user:invalid-password@localhost:5432/invalid-database';

    // Attempt to connect to the database using the mock DB URI
    const client = new Client(mockDBURI);
    try {
        await client.connect();
        // Connection should not succeed, so fail the test if it does
        expect(true).toBe(false); // This line should not be reached
    } catch (err) {
        // Connection error should be caught here
        expect(err.message).toContain('connection');
    } finally {
        // Close the client connection
        await client.end();
    }
});

//BUG FIX #3
const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

// Handle database connection errors
client.connect()
    .then(() => console.log('Connected to database'))
    .catch(err => {
        console.error('Error connecting to database:', err.message);
        process.exit(1); // Exit the application on connection error
    });

module.exports = client;
