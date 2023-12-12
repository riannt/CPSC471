import {db} from "../db.js"

export const grabAsses = (req,res) => {


    const q = "SELECT * FROM `assesment` WHERE userid = ? AND isCompleted = 0"
    //return res.json(req.query.userid)
    db.query(q,[req.query.userid],(err,data) =>{
        if (err) return res.json(err);
        return res.json(data)
    })
}

export const grabClasses = (req,res) => {


    const q = "SELECT * FROM `class` WHERE userid = ?"
    //return res.json(req.query.userid)
    db.query(q,[req.query.userid],(err,data) =>{
        if (err) return res.json(err);
        return res.json(data)
    })
}

export const grabAssesComplete = (req,res) => {


    const q = "SELECT * FROM `assesment` WHERE userid = ? AND isCompleted = 1"
    //return res.json(req.query.userid)
    db.query(q,[req.query.userid],(err,data) =>{
        if (err) return res.json(err);
        return res.json(data)
    })
}

