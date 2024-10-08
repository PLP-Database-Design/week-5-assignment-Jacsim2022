// importing the neccessary dependancies
const express = require('express')
const mysql = require('mysql2')
const dotenv = require('dotenv')


const app = express()
dotenv.config()


// create a connection object
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

// test the connection
db.connect((err) => {
    // connection not successful
    if(err) {
        return console.log("Error connecting to MySQL", err)
    }

    // connection successful
    console.log("MySQL connection successful")
})




// // 1. get patients
// app.get('/get-patients', (req, res) => {
//     const getPatients = "SELECT * FROM patients"

//     db.query(getPatients, (err, results) => {
//         // have an error
//         if(err) {
//             return res.status(500).send("Failed to fetch the patients")
//         }

//         // get back the data/results
//         res.status(200).send(results)
//     })
// })


// // 2. get providers
// app.get('/get-providers', (req, res) => {
//     const getproviders = "SELECT * FROM providers"

//     db.query(getproviders, (err, results) => {
//         // have an error
//         if(err) {
//             return res.status(500).send("Failed to fetch the providers")
//         }

//         // get back the data/results
//         res.status(200).send(results)
//     })
// })




// // 3. Filter patients by First Name
// app.get('/get-patients', (req, res) => {
//     const firstName = req.query.first_name; // Get the first name from query parameters

//     // Check if the first name is provided
//     if (!firstName) {
//         return res.status(400).send("First name is required");
//     }

//     // SQL query to filter patients by their first name
//     const getPatientsQuery = "SELECT * FROM patients WHERE first_name = ?";

//     // Execute the query
//     db.query(getPatientsQuery, [firstName], (err, results) => {
//         if (err) {
//             return res.status(500).send("Failed to fetch the patients");
//         }

//         // If no patients found with the given first name
//         if (results.length === 0) {
//             return res.status(404).send("No patients found with the given first name");
//         }

//         // Return the filtered patients
//         res.status(200).send(results);
//     });
// });




// // 4. retrieve providers by specialty
// app.get('/get-providers', (req, res) => {
//     const specialty = req.query.provider_specialty; // Retrieve provider_specialty from query parameters

//     // Ensure provider_specialty is provided
//     if (!specialty) {
//         return res.status(400).send("provider_specialty is required");
//     }

//     // SQL query to retrieve providers by their specialty
//     const getProviders = "SELECT * FROM providers WHERE provider_specialty = ?";

//     // Execute the query
//     db.query(getProviders, [specialty], (err, results) => {
//         // Handle SQL errors
//         if (err) {
//             return res.status(500).send("Failed to fetch the providers");
//         }

//         // If no results are found
//         if (results.length === 0) {
//             return res.status(404).send("No providers found with the given specialty");
//         }

//         // Send back the retrieved providers
//         res.status(200).send(results);
//     });
// });


// delcare the port and listen to the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})