
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


export const getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const contact = await User.findById(id);
        
        if (!contact) {
            return res.json({ message: "Contact not found" });
        }
  
       res.status(200).json(contact)
    } catch (error) {
        console.error("Error retrieving contact:", error);
        res.json({ message: "Internal Server Error" });
    }
};

