import User from '../models/user'


export const getUser = async(req,res)=>{
  const user = await User.find() ; 
  res.json(user) ; 
}

export const addUser = async(req,res)=>{
  const name = req.body.name ; 
  const user = new User({name}) ; 
  await user.save() ; 
  res.status(201).json(user) ; 
}