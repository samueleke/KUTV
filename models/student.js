import Connection from './database.js';

const dbConnection = new Connection()

export const insertIntoStudent = (student,isLeader) => {
    const query = `
    INSERT INTO Student(Csaladnev,Keresztnev,Email,Telefonszam,Varos,Megye,Iranyitoszam,
    Csapatkapitány,Osztaly,Nem,IskolaID) 
    values(?,?,?,?,?,?,?,?,?,?,?);
    `;
    return dbConnection.executeQuery(query, [student.csname, student.kname, 
        student.email, student.telefonszam, student.city, student.county, 
        student.post_code, isLeader,student.group, student.nem, student.IskolaNev]);
}

export const selectAllStudent =()=>{
    return dbConnection.executeQuery('SELECT * FROM Student')
}