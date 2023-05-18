import { response } from "express";
import user from "../model/user-schem.js";
import User from "../model/user-schem.js";


export const userSignup = async (request, response) => {
    try {
        const exist = await user.findOne({ email: request.body.email });
        if (exist) {
            return response.status(401).json({ message: 'An account with this email already exists' });
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();

        response.status(200).json({ message: user });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const userLogin = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;

        let user = await user.findOne({ email: email, password: password });

        if (user) {
            return response.status(200).json(`${firstname} login successfull`);
        } else {
            return response.status(401).json('Invalid login');
        }
    } catch (error) {
        response.status(500).json('Error', error.message);
    }
}