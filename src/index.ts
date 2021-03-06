import { AppRouter } from "./AppRouter";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import express, { Request, Response } from "express";
import "./controllers/LoginController";
import "./controllers/RootController";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: [`myCookie`] }));
app.use(AppRouter.instance);

app.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
