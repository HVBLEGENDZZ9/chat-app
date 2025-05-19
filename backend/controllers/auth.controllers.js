import User from '../models/user.model.js';

export const signup = async (req,res) => {
    try{
        const {fullName, userName, password, confirmPassword, gender} = req.body;

        if(password!== confirmPassword) {
            return res.status(400).json({error: "Passwords do not match"});
        }

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error: "Username already exists!"});
        }
        
        maleProfilePic = 'https://avatar.iran.liara.run/public/boy?username=${username}';
        femaleProfilePic = 'https://avatar.iran.liara.run/public/girl?username=${username}';

        const newUser = new User({
            fullName,
            userName,
            password,
            gender,
            profilePic : gender == "male" ? maleProfilePic : femaleProfilePic
        })

        await newUser.save();

        res.status(201).json({
            _id : newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            profilePic: newUser.profilePic
        })
    } catch (error){
        console.log("Error in signup controller", error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

export const login = (req, res) => {
    console.log("login user");
};

export const logout = (req, res) => {
    console.log("logout user");
};