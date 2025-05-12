import { Router, Request, Response } from "express";
import db from "../db";

const routerUser = Router();

routerUser.get("/:id", async (req: Request, res: Response) =>{
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
     res.status(400).json({ error: "ID inválido" });
      return;
  }
  try {
    const user = await db.users.getUserById(userId);
    if (!user) {
       res.status(404).json({ error: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
     res.status(500).json({ error: "Erro ao buscar usuário" });
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
    console.error("Erro ao buscar usuários:", error);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

export default routerUser;
