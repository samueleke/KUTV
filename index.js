import express from "express";
// import { is } from "express/lib/request";
import path from 'path';
import ejs from "ejs";
import { getAllSchools } from "./models/schools.js";
import { get } from "http";
import { insertIntoStudent, selectAllStudent } from "./models/student.js";

//current working directory
const staticDir = path.join(process.cwd(), 'static');
const app = express();
const key = process.env.GOOGLE_MAP_API;

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.urlencoded({ extended: true }))
app.use(express.static(staticDir));

app.get('/', (req, res) => {
    res.render('index', { key });
})

app.post("/formsubmit", async (req, res) => {
    const isLeader = Boolean(req.body.csapatkapitany)

    const respBody = `A szerver megkapta a kovetkezo informaciot:
    Csaladnev : ${req.body.csname}
    Keresztnev : ${req.body.kname}
    Email : ${req.body.email}
    Telefonszam : ${req.body.telefonszam}
    Varos : ${req.body.city}
    Megye : ${req.body.county}
    Iranyitoszam : ${req.body.post_code}
    csapatkakitany : ${isLeader}
    Osztaly : ${req.body.group}
    Nem : ${req.body.nem}
    IskolaNev : ${req.body.IskolaNev}
    `;

    await insertIntoStudent(req.body, isLeader);
    const students = await selectAllStudent();
    res.render('success');
})


app.get('/signUpForm', async (req, res) => {
    const schools = await getAllSchools();
    console.log(schools);
    res.render('signUpForm', { schools });
})

//global error handler
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    //console.log(err,code);

    res.status(500).json({
        message: "Something went wrong",
    });
});

app.listen(3000, (err) => {
    if (err) {
        console.log("There was an error", err);
        return;
    }
    console.log('App is litening on port:', 3000)
})