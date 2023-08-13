const express=require('express');
const router=express.Router();
const { getAll ,create, getById,updateById, deleteById, getTen}=require('../controllers/contactController')


router.route("/").get(getAll);

router.route("/").post(create);

router.route("/:id").get(getById);

router.route("/").get(getTen);

router.route("/:id").put(updateById);

router.route("/:id").delete(deleteById);







module.exports=router;