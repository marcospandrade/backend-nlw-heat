import { Router } from "express";
import { AuthenticatedUserController } from "./controllers/AuthenticatedUserController";

const router = Router();

router.post("/authenticate", new AuthenticatedUserController().handle);

export { router };
