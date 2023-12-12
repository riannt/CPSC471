import {db} from "../db.js"

export const addClass = (req,res) => {

    const q = "SELECT * FROM class WHERE className = ? AND userid = ?"

    db.query(q,[req.body.className, req.body.userid], (err,data)=>{
        if (err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists");

        const q = "INSERT INTO class(`className`,`instructorName`,`location`,`description`,`userid`) VALUES (?)"
        const values = [
            req.body.className,
            req.body.inName,
            req.body.location,
            req.body.desc,
            req.body.userid,
        ]

        db.query(q,[values],(err,data) => {
            if (err) return res.json(err);
            return res.status(200).json("Class has been created");
        })
    
    })
}

export const addAsses = (req, res) => {

    const q = "INSERT INTO assesment(`title`,`description`,`startDateTime`,`endDateTime`,`userid`) VALUES (?)"
    const values = [
        req.body.assesName,
        req.body.desc,
        req.body.startDateTime,
        req.body.endDateTime,
        req.body.userid,
    ]

    db.query(q,[values],(err,data) => {
        if (err) return res.json(err);
        return res.status(200).json("Assesment has been created");
    })

}