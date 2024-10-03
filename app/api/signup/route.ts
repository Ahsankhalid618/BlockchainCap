import User from "../.././../models/User";
import connect from "../.././../lib/mongodb";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";


export const POST = async (request : any) => {
    const {email, password, FullName} = await request.json();

    await connect();

const existingUser = await User.findOne({email});

if (existingUser) {
    return new NextResponse("Email is already in use", {status: 400});
}

const hashedPassword = await bcrypt.hash(password, 5);
const newUser = new User({
    email,
    password: hashedPassword,
    FullName,
})

    try{
        await newUser.save();
        return new NextResponse("user is registered", {status: 200});
    } catch (err) {
        console.error('Error in /api/signup:', err);
        return new NextResponse('Error saving user to the database', {
            status: 500,
        });
    }
};