import { createError } from "../utils/error.js";
import { connectToDB } from "../utils/connect.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";


export async function register(req, res, next) {
    const data = req.body;
    console.log(data);
    if (!data?.email || !data?.password) {
        return next(createError(400, "Missing fields."))
    }
    await connectToDB();

    const existingUser = await User.exists({ email: data.email })
    
    if (existingUser) return next(createError(400, "User already exists."))
    
    // res.send("register user")
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({ ...req.body, password: hashedPassword });
    await newUser.save();
    res.status(201).json("User created successfully.")
}

export async function login(req, res, next) {
    res.send("new login route")
}

export async function logout(req, res, next) {
    res.send("new logout route")
}