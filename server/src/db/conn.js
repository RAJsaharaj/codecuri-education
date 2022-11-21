const mongoose = require("mongoose")

/*****create connection to DB */
mongoose.connect("mongodb://localhost:27017/mynewdb").then(()=>{
    console.log("connection Successful");
}).catch((err)=>{
    console.log("Connection Error")
});
// mongoose.connect("mongodb+srv://codecuri:Rajibsaha3@cluster0.0wkmz.mongodb.net/?retryWrites=true&w=majority").then(() => {
//     console.log(`connection sucessful`);
// }).catch((err) => console.log(`Could not connect to server`)
// );
