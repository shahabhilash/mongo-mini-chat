const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

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
});
    
chat.insertMany(allchats)