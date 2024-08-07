"use client";
// constants.ts

import BorderAllIcon from "@mui/icons-material/BorderAll";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import React from "react";
import type { DarkModeType, SideBarMenu } from "../Types";

const iconStyle = { fontSize: 18 };

export const initialSideBarMenu: SideBarMenu[] = [
  {
    id: 1,
    name: "All Snippets",
    isSelected: true,
    icons: React.createElement(BorderAllIcon, { sx: iconStyle }),
  },
  {
    id: 2,
    name: "Favorites",
    isSelected: false,
    icons: React.createElement(FavoriteBorderIcon, { sx: iconStyle }),
  },
  {
    id: 3,
    name: "Trash",
    isSelected: false,
    icons: React.createElement(DeleteOutlineOutlinedIcon, { sx: iconStyle }),
  },
];

export const initialDarkMode: DarkModeType[] = [
  {
    id: 1,
    icons: React.createElement(LightModeIcon, { sx: iconStyle }),
    isSelected: true,
  },
  {
    id: 2,
    icons: React.createElement(DarkModeIcon, { sx: iconStyle }),
    isSelected: false,
  },
];

export const initialTagsAndLogoutMenu: SideBarMenu[] = [
  {
    id: 1,
    name: "Tags",
    isSelected: false,
    icons: React.createElement(StyleOutlinedIcon, { sx: iconStyle }),
  },
  {
    id: 2,
    name: "Log Out",
    isSelected: false,
    icons: React.createElement(LogoutIcon, { sx: iconStyle }),
  },
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
