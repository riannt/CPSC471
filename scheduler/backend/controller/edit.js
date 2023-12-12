import {db} from "../db.js"

export const edituser = (req, res) => {

    const q = "UPDATE user SET `username` = ? WHERE userid = ?"
    const values = [
        req.body.username,
        req.body.userid
    ]

    db.query(q,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json("username updated")
    })
}

export const editFname = (req, res) => {

    const qr = "UPDATE user SET `fname` = ? WHERE userid = ? "
    const values = [
        req.body.fname,
        req.body.userid
    ]

    db.query(qr,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json("first name updated")
    })
    
    
}

export const editLname = (req, res) => {



    const q = "UPDATE user SET `lname` = ? WHERE userid = ?"
    const values = [
        req.body.lname,
        req.body.userid
    ]

    db.query(q,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json("last name updated")
    })

}

export const editSchool = (req, res) => {

    const q = "UPDATE user SET `school` = ? WHERE userid = ?"
    const values = [
        req.body.school,
        req.body.userid
    ]

    db.query(q,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json("school updated")
    })

}

export const editComplete = (req, res) => {
    const q = "UPDATE assesment SET `isCompleted` = ? WHERE assesID = ?"
    const values = [
        req.body.status,
        req.body.assesid
    ]

    db.query(q,values,(err,data)=>{
        if (err) return res.json(err);
        return res.json("isCompleted updated")
    })
}