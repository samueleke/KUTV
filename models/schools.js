import Connection from './database.js';

const dbConnection = new Connection()

export const getAllSchools = () =>{
    const query = 'SELECT * FROM Iskola';
    return dbConnection.executeQuery(query);
}