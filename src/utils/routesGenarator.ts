import { ReactNode } from "react";
type TRoutes = {
  path: string;
  element: ReactNode;
};

export interface TUserPath {
  name: string;
  path: string;
  element?: ReactNode;
  children?: { name: string; path: string; element?: ReactNode }[];
}

export const routesGenaratior = (items: TUserPath[]) => {
  const routes = items.reduce((acc: TRoutes[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
