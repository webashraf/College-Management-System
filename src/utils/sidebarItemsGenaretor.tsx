import { NavLink } from "react-router-dom";
import { TSidbarItem, TSidbarItems } from "../types";

export const sidebarItemsGenaretor = (items: TSidbarItems[], role: string) => {
  const adminSidbarItems = items.reduce((acc: TSidbarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return adminSidbarItems;
};
