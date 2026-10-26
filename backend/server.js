import app from "./src/app/app.js";
import dbconnect from "./src/config/db.js";

await dbconnect()

app.listen(3000,()=>{
    console.log("server is running");
    
})