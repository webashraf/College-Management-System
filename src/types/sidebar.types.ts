import { ReactNode } from "react";

export type TSidbarItem = {
  key: string;
  label: ReactNode;
  children?: TSidbarItem[];
};
export type TSidbarItems = {
  name: string;
  path: string;
  element?: ReactNode;
  children?: { name: string; path: string; element?: ReactNode }[];
};
