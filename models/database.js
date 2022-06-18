
import autoBind from 'auto-bind';
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config();
export class Connection {
    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });
        autoBind(this);
    }
    executeQuery(query, options = []) {
        return new Promise((resolve, reject) => {
            this.pool.execute(query, options, (err, res) => {
                if (err) {
                    reject(new Error(`Error while connecting '${query}: ${err}'`));
                }
                resolve(res);
            });
        });
    };

}


export const createTables = async () => {
    const dbConnection = new Connection();
    try {
        await dbConnection.executeQuery(`CREATE TABLE IF NOT EXISTS Iskola (
            IskolaID INT AUTO_INCREMENT PRIMARY KEY,
            IskolaNev varchar(255) NOT NULL 
        );`);

        await dbConnection.executeQuery(`CREATE TABLE IF NOT EXISTS Student(
            StudentID INT AUTO_INCREMENT PRIMARY KEY,
            Csaladnev VARCHAR(50) NOT NULL,
            Keresztnev VARCHAR(50) NOT NULL,
            Email VARCHAR(50) NOT NULL,
            Telefonszam VARCHAR(30) NOT NULL,
            Varos VARCHAR(30),
            Megye VARCHAR(30),
            Iranyitoszam VARCHAR(30),
            Csapatkapitány TINYINT(1) NOT NULL,
            Osztaly VARCHAR(20) NOT NULL,
            Nem ENUM('ferfi', 'no') NOT NULL,
            IskolaID INT NOT NULL, 
            FOREIGN KEY (IskolaID) REFERENCES Iskola (IskolaID)
        );`);
        console.log('Tables created successfully');
    } catch (err) {
        console.error(`Create table error: ${err}`);
        process.exit(1);
    }
};



createTables().catch((err) => {
    console.error(err);
});


export default Connection;