import { Router } from "express";
import { AuthenticatedUserController } from "./controllers/AuthenticatedUserController";
import { CreateMessageController } from "./controllers/CreateMessageController";
import { GetLast3MessagesController } from "./controllers/GetLast3MessagesController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticatedUserController().handle);
router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);
router.get("/messages/last3", new GetLast3MessagesController().handle);

export { router };
