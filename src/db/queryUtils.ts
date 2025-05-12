import { ResultSetHeader } from "mysql2";
import poolConnection from "./connection";

export async function selectQuery<T>(
  queryString: string,
  params?: any[]
): Promise<Partial<T>[]> {
  const [results] = await poolConnection.query(queryString, params);
  return results as T[];
}


export async function selectExecute<T>(
  queryString: string,
  params?: any[]
): Promise<Partial<T>[]> {
  const [results] = await poolConnection.execute(queryString, params);
  return results as T[];
}

// insert/update/delete
export async function ModifyExecute(
  queryString: string,
  params?: any[]
): Promise<ResultSetHeader> {
  const [results] = await poolConnection.execute(queryString, params);
  return results as ResultSetHeader;
}

// insert/update/delete
export async function ModifyQuery(
  queryString: string,
  params?: any[]
): Promise<ResultSetHeader> {
  const [results] = await poolConnection.query(queryString, params);
  return results as ResultSetHeader;
}
