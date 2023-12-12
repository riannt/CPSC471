import {db} from "../db.js"

export const removeAsses = (req,res) => {
    const q = "DELETE FROM `assesment` WHERE `assesID` = ?"
    //return res.json(req.query.assesid)
    db.query(q,[req.query.assesid], (err,data)=>{
        if (err) return res.json(err);
        return res.json("assesment deleted")
    })

}

export const removeClass = (req,res) => {
    const q = "DELETE FROM `class` WHERE `classid` = ?"
    db.query(q,[req.query.classid], (err,data)=>{
        if (err) return res.json(err);
        return res.json("class deleted")
    })
    
}