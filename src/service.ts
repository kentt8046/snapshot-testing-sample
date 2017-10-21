import { pseudoRandomBytes } from "crypto";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  accountName: string;
}

const userStore = new Map<string, User>();
export function createUser(user: User): User & { id: string } {
  const id = pseudoRandomBytes(64).toString("hex");
  const entity = { id, ...user };
  userStore.set(id, entity)
  return entity;
}
