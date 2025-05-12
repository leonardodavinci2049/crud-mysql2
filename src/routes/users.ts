import { Router, Request, Response } from "express";
import db from "../users";
import { TypeUserRow } from "../users/TypeUser";
import messages from "../config/language";

const routerUser = Router();

routerUser.get("/:id", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    res.status(400).json({ error: messages.errors.invalidId });
    return;
  }
  try {
    const user = await db.users.getUserById(userId);
    if (!user) {
      res.status(404).json({ error: messages.errors.userNotFound });
    }
    res.json(user);
  } catch (error) {
    console.error(messages.logs.fetchUserError, error);
    res.status(500).json({ error: messages.errors.fetchUserError });
    return;
  }
});

// GET /api/users
// Rota genérica primeiro
routerUser.get("/", async (req: Request, res: Response) => {
  try {
    const users = await db.users.getAll();
    res.json(users);
  } catch (error) {
    console.error(messages.logs.fetchUsersError, error);
    res.status(500).json({ error: messages.errors.fetchUsersError });
  }
});

// POST /api/users
routerUser.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: messages.errors.requiredFields });
    return;
  }
  try {
    const userData = {
      name: name.toString(),
      email: email.toString(),
      createdAt: new Date(),
    };

    // Let the database layer handle the proper TypeUserRow construction
    const newUser = await db.users.createUser(userData as any); // Using 'any' here as a temporary workaround
    res.status(201).json(newUser);
  } catch (error) {
    console.error(messages.logs.createUserError, error);
    res.status(500).json({ error: messages.errors.createUserError });
  }
});


routerUser.post("/create2", async (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: messages.errors.requiredFields });
    return;
  }
  try {
    const userData = {
      name: name.toString(),
      email: email.toString(),
      createdAt: new Date(),
    };

    // Let the database layer handle the proper TypeUserRow construction
    const newUser = await db.users.createUser2(userData as any); // Using 'any' here as a temporary workaround
    res.status(201).json(newUser);
  } catch (error) {
    console.error(messages.logs.createUserError, error);
    res.status(500).json({ error: messages.errors.createUserError });
  }
});

routerUser.put("/:id", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    res.status(400).json({ error: messages.errors.invalidId });
    return;
  }
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400).json({ error: messages.errors.requiredFields });
    return;
  }
  try {
    const userData = {
      name: name.toString(),
      email: email.toString(),
    };
    await db.users.updateUser(userId, userData as any); // Using 'any' here as a temporary workaround
    res.status(204).send();
  } catch (error) {
    console.error(messages.logs.createUserError, error);
    res.status(500).json({ error: messages.errors.createUserError });
  }
}); 

routerUser.delete("/:id", async (req: Request, res: Response) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    res.status(400).json({ error: messages.errors.invalidId });
    return;
  }
  try {
    await db.users.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    console.error(messages.logs.createUserError, error);
    res.status(500).json({ error: messages.errors.createUserError });
  }
}); 


export default routerUser;
