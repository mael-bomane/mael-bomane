import type { Database } from "./database";
export * from "./config";
export * from "./database";

export type User = Database['public']['Tables']['profiles']['Row'];
export type Project = Database['public']['Tables']['projects']['Row'];

export type Task = {
  id: number
  title: string
  done: boolean
}

