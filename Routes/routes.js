const express=require('express')
const UserController=require('../Controllers/UserController')
const projectController=require('../Controllers/projectController')

const router=express.Router()
const jwtmiddle=require('../Middlewares/jwtMiddleware')
const multerMiddle = require('../Middlewares/multerMiddlewareConfig')

// user
router.post('/login',UserController.userLogin)
router.post('/reg',UserController.userRegister)
router.put('/updateprofile',jwtmiddle,multerMiddle.single('profile'),UserController.profileUpdate)

// projects
router.post('/addproject',jwtmiddle,multerMiddle.single("image"),projectController.addProject)
router.get('/allprojects',projectController.allProjects)
router.get('/userprojects',jwtmiddle,projectController.userProjects)
router.get('/getproject/:id',jwtmiddle,projectController.getProjectwithId)
router.delete('/delproject/:id',jwtmiddle,projectController.deleteProject)
router.put('/editproject/:id',jwtmiddle,multerMiddle.single("image") ,projectController.updateProject)


module.exports=router