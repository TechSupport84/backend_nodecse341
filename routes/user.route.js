import express from  "express"
const userRouter = express.Router()
import { getUsers,getContactById } from "../controllers/userController.js";



userRouter.get("/",getUsers)

userRouter.get("/:id",getContactById)





export  default userRouter;