import express from "express";
import swagger  from "./swagger.js"
import userRouter from "./user.route.js";

const routes  = express.Router()

routes.use('/', swagger);
routes.use('/Contacts', userRouter);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'http://localhost:5001/api/Contacts/',
    };
    res.send(docData);
  })
);

module.exports = routes;