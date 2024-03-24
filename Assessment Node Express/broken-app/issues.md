# Broken App Issues
Original catch block used next(err) without passing the error object (err).
    Now the catch block catches the errors and passes them to the 'next' function to trigger the error handling middleware.

Original code used await/async inside of map functions.
    Promise.all is now used to handle the multiple asynchronous requests more efficiently.

Original code used res.send(JSON.stringify(out)) to send a response.
    Updated code uses res.json(out) to send a JSON response directly and for better formatting.

Original code did not use middleware for parsing JSON bodies and handling errors.
    Updated code adds middleware to parse the bodies. Error handling middleware has also been added to catch and handle errors.

Original code had no comments or documentation.
    Updated code adds comments and documentation for better readability and easier maintenance in the future.