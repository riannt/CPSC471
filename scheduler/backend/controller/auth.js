import {db} from "../db.js"

export const register = (req,res)=>{



    const q = "SELECT * FROM user WHERE email = ? OR username = ?"

    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        if (err) return res.json(err);
        if(data.length) return res.status(409).json("User already exists");


        const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            req.body.password,
        ]

        db.query(q,[values],(err,data) => {
            if (err) return res.json(err);
            return res.status(200).json("User has been created");
        })
    });
    

}

export const login = (req,res) => {
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"
    db.query(q,[req.body.email, req.body.username], (err,data)=>{
        
        //check for if user exists
        if (err) return res.json(err);
        if(data.length === 0) return res.status(404).json("User not found");

        //validate password
        if (!(data[0].password == req.body.password)) return res.status(400).json("Wrong username or password")
        return res.status(200).json(data[0])
    })
}

    
