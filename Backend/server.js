 /* server ko start karna */
 /* database se connect karna */


require("dotenv").config();
const app =require("./src/app");
const connectTDB =require("./src/config/DataBase");

connectTDB();



app.listen(3000,()=>{
  console.log('Server is running on port 3000');
})