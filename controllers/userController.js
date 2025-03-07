import express from "express";
import mongoose from "mongoose";
import { User } from "../models/user.model.js";

export const getUsers = async (req, res) => {
    try {
        
        const users = await User.find({})
        
        res.json(users);
    } catch (error) {
        console.error("Error occurred: ", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


