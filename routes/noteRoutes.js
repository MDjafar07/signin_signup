const express=require("express");
const authmiddleware=require("../middlewares/authmiddleware.js");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const noteRouter=express.Router();

noteRouter.get('/',authmiddleware,getNotes)
noteRouter.post('/ab',authmiddleware,createNote)
noteRouter.delete('/:id',authmiddleware,deleteNote)
noteRouter.put('/:id',authmiddleware,updateNote)


module.exports=noteRouter;