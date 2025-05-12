import { selectExecute, selectQuery } from "../db/queryUtils";
import { TypeUserRow } from "./TypeUser";

export function getAll() {
  return selectQuery<TypeUserRow>("SELECT * FROM tbl_user");
}

export function getUserById(id: number) {
  const queryString = "SELECT * FROM tbl_user WHERE id = ?;";
  return selectExecute<TypeUserRow>(queryString, [id]);
}

export function getUserByEmail(email: string) {
  const queryString = "SELECT * FROM tbl_user WHERE email = ?;";

  return selectQuery<TypeUserRow>(queryString, [email]);
}

export function createUser(user: TypeUserRow) {
  const queryString =
    "INSERT INTO tbl_user (name, email, createdAt) VALUES (?, ?, ?);";
  return selectExecute<TypeUserRow>(queryString, [
    user.name,
    user.email,
    user.createdAt,
  ]);
}
// http://localhost:3000/api/users/create2
export function createUser2(user: TypeUserRow) {
  /*   const queryString =
    "INSERT INTO tbl_user SET name = ?, email = ?, createdAt = ?;";
 */
  const queryString = "INSERT INTO tbl_user SET ?;";

  return selectExecute<TypeUserRow>(queryString, [user]);
}

export function updateUser(id: number, user: TypeUserRow) {
  const queryString =
    "UPDATE tbl_user SET name = ?, email = ? WHERE id = ?;";
  return selectExecute<TypeUserRow>(queryString, [
    user.name,
    user.email,
    id,
  ]);
}

export function deleteUser(id: number) {
  const queryString = "DELETE FROM tbl_user WHERE id = ?;";
  return selectExecute<TypeUserRow>(queryString, [id]);
}