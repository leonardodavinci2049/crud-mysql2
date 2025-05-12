import { selectExecute, selectQuery } from "./queryUtils";
import { TypeUserRow } from "./TypeUser";

export function getAll() {
  return selectQuery<TypeUserRow>("SELECT * FROM tbl_user");
}

export function getUserById(id: number) {
  return selectExecute<TypeUserRow>("SELECT * FROM tbl_user WHERE id = ?", [id]);
}

export function getUserByEmail(email: string) {
  return selectQuery<TypeUserRow>("SELECT * FROM tbl_user WHERE email = ?", [
    email,
  ]);
}
