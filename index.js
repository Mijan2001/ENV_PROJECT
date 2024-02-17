const app = require("./app");
require("dotenv").config();
const port = 3000;

app.listen(port, () => {
  console.log(`this app is runnig at port : ${port}`);
});
