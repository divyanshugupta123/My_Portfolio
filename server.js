const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path')
dotenv.config();


app.use(cors());
app.use(express.json());


// static files
app.use(express.static(path.join(__dirname,'./client/build')));

app.use("/api/v1/portfolio", require("./routes/portfolio"));

app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"./client/build/index.html"))
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server connected at port ${PORT} `);
});
