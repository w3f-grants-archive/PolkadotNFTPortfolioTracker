import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Stats - Current Floor/Sales floor
export function fetchFloorPrice(host, collectionId, startTime, endTime) {
    // Load the GraphQL query from the file
    const queryFilePath = path.join(__dirname, '../src/queries/getSalesFloor.graphql');
    const query = fs.readFileSync(queryFilePath, 'utf8');
    
    const variables = {
        collectionId: collectionId,
        startTime: startTime,
        endTime: endTime
    };

    // Make the request to receive data from 
    axios.post(host, { query: query, variables: variables })
        .then(response => {
            console.log(JSON.stringify(response.data, null, 4));
        })
        .catch(error => {
            console.error("Error querying GraphQL:", error.message);
            if (error.response && error.response.data && error.response.data.errors) {
                console.error("GraphQL Errors:", JSON.stringify(error.response.data.errors, null, 2));
            }
        });
}