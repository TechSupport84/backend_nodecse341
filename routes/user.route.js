import express from  "express"
const userRouter = express.Router()
import { getUsers,getContactById, createContacts,updateContacts,deleteContacts} from "../controllers/userController.js";



userRouter.get("/",getUsers)
userRouter.get("/:id",getContactById)
userRouter.post("/create", createContacts)
userRouter.put("/update/:id",updateContacts )
userRouter.delete("/delete/:id",deleteContacts)




export  default userRouter;