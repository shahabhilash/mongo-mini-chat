const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

main()
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/myapp');
}

let chat1 = new Chat({
    from : "Abhilash ",
    to : "Arshiya",
    msg : "send me your exam sheets",
    created_at : new Date(),
}) 

chat1.save().then((res) => {
    console.log ( res);
}).catch((err) => {
    console.log(err);
});

app.get("/chat", async (req, res) => {
    let chats = await Chat.find();
    res.send(chats);
    res.render("index.ejs", {chats});
});

// new route 
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
})

// Create route
app.post("/chats",(req, res) => {
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from : from,
        to : to,
        msg : msg,
        created_at : new Date(),
    });
    newChat.save().then((res) =>
         {console.log("chat was saved")}).catch((err) => {console.log(err)});
    res.redirect("/chats");
});

//edit route
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat})
});

//update route
app.put("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {msg: newMsg}, {new: true, runValidators: true});
    console.log(updatedChat);
    res.redirect("/chats");

});

//delete route
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("chl raha hai");
});

app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});