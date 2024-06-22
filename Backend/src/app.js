const express = require("express");
const bcrypt = require("bcrypt");
const { createToken } = require("./utils/token");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const User = require("./modules/user");
const Blogg = require("./modules/blog");
app.use(express.json());
app.use(cors());
mongoose
  .connect("mongodb://localhost:27017/Blogwebdb")
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/signup", async (req, res) => {
  try {
    const newUser = req.body;
    console.log(newUser);
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    await User.create(newUser);

    const token = createToken(newUser);
    return res.json({ token, newUser });
  } catch (error) {
    console.error("Signup error: ", error);
    res.status(500).json({ error: "Server Error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "User Not Found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Incorrect Password" });
    }
    console.log(user);
    const token = createToken(user);

    // Convert ObjectId to string
    const userInfo = {
      ...user.toObject(),
      _id: user._id.toString(),
    };

    return res.json({ token, user: userInfo }); // Ensure user data is being sent
  } catch (error) {
    console.error("Login error: ", error);
    return res.status(500).json({ error: "Server Error" });
  }
});

// app.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ error: "User Not Found" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(400).json({ error: "Incorrect Password" });
//     }
//     console.log(user);
//     const token = createToken(user);
//     return res.json({ token, user }); // Ensure user data is being sent
//   } catch (error) {
//     console.error("Login error: ", error);
//     return res.status(500).json({ error: "Server Error" });
//   }
// });

app.post("/post/new", async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      data: req.body.content,
      img: req.file
        ? req.file.path
        : "https://images.unsplash.com/photo-1610352328296-4443ba82e1f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: Date.now(),
      category: req.body.category,
      description: req.body.description,
    };

    const createdPost = await Blogg.create(newPost);
    res.json(createdPost);
    console.log(createdPost + " created");
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});
app.get("/api/blog", async (req, res) => {
  try {
    const blogs = await Blogg.find();
    res.json({ blogs });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});
app.get("/api/blog/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const blog = await Blogg.findById(`${id}`);
    res.json({ blog });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
