const UserModel = require("../model/usermodel.js");
const argon = require("argon2");
const asyncHandler = require("express-async-handler");
const generateToken = require("../middleware/token.js");

const Signup = asyncHandler(async (req, res) => {
  // const { name, email, mobile, password } = req.body;
  // const hashedPassword = await argon.hash(password);
  // const existingUser = await UserModel.findOne({email}).maxTimeMS(15000);

  

  // if (existingUser) {
  //   return res.status(400).send({ message: "User already exists" });
  // }

  // let newUser = await UserModel.create({
  //   name,
  //   email,
  //   mobile,
  //   password: hashedPassword,
  // });

  // if (newUser) {
  //   return res.status(200).json({
  //     _id: newUser._id,
  //     name: newUser.name,
  //     email: newUser.email,
  //     mobile: newUser.mobile,
  //   });
  // } else {
  //   throw new Error("Unable to sign up");
  // }

  const {name,mobile,email,password}=req.body
  try {
       // Input validation - check that name, email, and password are present in the request body
  if (!name || !mobile || !email  || !password) {
    return res.status(400).json({
      message: "Name, mobile,email and password are required.",
    });
  }
      const check=await Usermodel.find({email})
      
      if(check.length>0){
          return res.status(400).json({"message":"User already exist"})
      }
      bcrypt.hash(password, 5, async(err, secure_password)=> {
         if(err){
          console.log(err)
         }else{
          const user=new Usermodel({name,mobile,email,password:secure_password});
          await user.save();
          res.status(201).json({"message":"Account Created successfully"})
         }
      });
  } catch (err) {
      console.log(err);
      res.status(500).json({"message":"Getting error while creating account"})
  }


});

const Login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user && (await argon.verify(user.password, password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({ message: "Invalid email or password" });
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find().select("-password");

  if (users) {
    return res.status(200).send(users);
  } else {
    throw new Error("Unable to fetch users");
  }
});

const GetSingleUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;

  try {
    const singleUser = await UserModel.findById(userId).populate("cartId");
    if (singleUser) {
      return res.status(200).send(singleUser);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

const getProductsWithUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find().populate("cartId");

  if (users) {
    return res.status(200).send(users);
  } else {
    throw new Error("Unable to fetch users with products");
  }
});

module.exports = {
  Signup,
  Login,
  getAllUsers,
  getProductsWithUsers,
  GetSingleUser,
};
