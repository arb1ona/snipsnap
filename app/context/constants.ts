// constants.ts

import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import React from "react";
import { SideBarMenu, DarkModeType } from "./types";

// Helper function to create menu items
const createMenuItem = (
  id: number,
  name: string,
  isSelected: boolean,
  Icon: React.ComponentType
): SideBarMenu => ({
  id,
  name,
  isSelected,
  icon: <Icon sx={{ fontSize: 18 }} />,
});

export const initialSideBarMenu: SideBarMenu[] = [
  createMenuItem(1, "All Snippets", true, BorderAllIcon),
  createMenuItem(2, "Favorites", false, FavoriteBorderIcon),
  createMenuItem(3, "Trash", false, DeleteOutlineOutlinedIcon),
];

export const initialDarkMode: DarkModeType[] = [
  { id: 1, icon: <LightModeIcon sx={{ fontSize: 18 }} />, isSelected: true },
  { id: 2, icon: <DarkModeIcon sx={{ fontSize: 18 }} />, isSelected: false },
];

export const initialTagsAndLogoutMenu: SideBarMenu[] = [
  createMenuItem(1, "Tags", false, StyleOutlinedIcon),
  createMenuItem(2, "Log Out", false, LogoutIcon),
];

export const MOBILE_BREAKPOINT = 640; // in pixels

export const DEFAULT_LANGUAGE = "javascript";

export const PLACEHOLDER_NOTE = {
  _id: "",
  title: "",
  description: "",
  code: "",
  language: DEFAULT_LANGUAGE,
  tags: [],
  isFavorite: false,
  isTrash: false,
  creationDate: new Date().toISOString(),
  clerkUserId: "",
};
