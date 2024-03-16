const mongoose = require('mongoose');
let compass_url = 'mongodb://localhost:27017/Sampledb'

let mongodb_url = "mongodb+srv://athulkrishnapanamakkal:athulpu@cluster0.oll34kg.mongodb.net/firstdb?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongodb_url).then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err)
});

