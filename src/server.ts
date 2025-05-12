import express from "express";
import apiRouterUser from "./routes";

const app = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouterUser);

app.listen(port, async () => {
  console.log(`Server running  on port ${port}`);
});

//http://localhost:3000/api/users
// https://www.urlencoder.org/
//1%3B%20DROP%20TABLE%20users