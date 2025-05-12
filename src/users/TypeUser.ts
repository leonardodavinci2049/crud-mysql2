import { RowDataPacket } from "mysql2";

export interface TypeUserRow extends RowDataPacket {
  id?: number;
  name: string;
  email: string;
  createdAt: Date;
}
