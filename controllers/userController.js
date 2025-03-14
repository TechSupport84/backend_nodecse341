
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


export  const createContacts = async(req, res) =>{
    const { firstName , lastName, email, favoriteColor, birthday} = req.body;
    try {

    if(!firstName || !lastName || !email ||!favoriteColor ||!birthday){
        return res.status(400).json({success: false, message:"All  fields  are required!"})
    }

    const newContacts = new User({firstName, lastName, email, favoriteColor, birthday})
    await newContacts.save()
    res.status(200).json({success: true, message:"Contact created successfully! ", newContacts})
        
  } catch (error) {
     res.status(500).json({success:false, message:"Internal  error."})   
  }
}


export const updateContacts = async(req, res)=>{
const {id} = req.params;
const contactData = req.body;

try {
    
    if(!id){
        return res.status(404).json({success: false, message:"No Id  found"})
    }
    const contactUpdateData =  await User.findByIdAndUpdate(id, contactData, {new:true})

    if(!contactUpdateData){
        return res.status(404).json({success: false, message:"User no found "})
    }
    res.status(200).json({success:true, message:"Contacts  updated successfully! ", contactUpdateData})
} catch (error) {
     res.status(500).json({success: false, message:"Internal  error "})
}
}

export const deleteContacts = async(req, res) =>{
    const {id} = req.params;
    try {
        
        if(!id){
            return res.status(400).json({success:false, message:" Id required."})
        }
        const deletedContacts = await User.findByIdAndDelete(id)
        if(!deletedContacts){
            return res.status(404).json({success:false, message:"NO Id  found"})
        }

        res.status(200).json({success:true, message:"Contact deleted successfully! "})
    } catch (error) {
        res.status(500).json({success:false, message:"Internal  error ."})
        
    }
}