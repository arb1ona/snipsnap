import { ReactNode } from "react";
import {
  CodeLanguageCounterType,
  DarkModeType,
  SideBarMenu,
  SingleCodeLanguageType,
  SingleNoteType,
  SingleTagType,
} from "../Types";

export interface GlobalContextType {
  sharedUserIdObject: {
    sharedUserId: string;
    setSharedUserId: React.Dispatch<React.SetStateAction<string>>;
  };
  sideBarMenuObject: {
    sideBarMenu: SideBarMenu[];
    setSideBarMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  darkModeObject: {
    darkMode: DarkModeType[];
    setDarkMode: React.Dispatch<React.SetStateAction<DarkModeType[]>>;
  };

  openSideBarObject: {
    openSideBar: boolean;
    setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  };

  openContentNoteObject: {
    openContentNote: boolean;
    setOpenContentNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  isMobileObject: {
    isMobile: boolean;
    setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allNotesObject: {
    allNotes: SingleNoteType[];
    setAllNotes: React.Dispatch<React.SetStateAction<SingleNoteType[]>>;
  };

  selectedNoteObject: {
    selectedNote: SingleNoteType | null;
    setSelectedNote: React.Dispatch<
      React.SetStateAction<SingleNoteType | null>
    >;
  };

  isNewNoteObject: {
    isNewNote: boolean;
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
  };
  allTagsObject: {
    allTags: SingleTagType[];
    setAllTags: React.Dispatch<React.SetStateAction<SingleTagType[]>>;
  };

  selectedTagsObject: {
    selectedTags: SingleTagType[];
    setSelectedTags: React.Dispatch<React.SetStateAction<SingleTagType[]>>;
  };
  selectedLanguageObject: {
    selectedLanguage: SingleCodeLanguageType | null;
    setSelectedLanguage: React.Dispatch<
      React.SetStateAction<SingleCodeLanguageType | null>
    >;
  };

  openConfirmationWindowObject: {
    openConfirmationWindow: boolean;
    setOpenConfirmationWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  codeLanguageCounterObject: {
    codeLanguagesCounter: CodeLanguageCounterType[];
    setCodeLanguagesCounter: React.Dispatch<
      React.SetStateAction<CodeLanguageCounterType[]>
    >;
  };

  openTagsWindowObject: {
    openTagsWindow: boolean;
    setOpenTagsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  tagsAndLogoutMenuObject: {
    tagsAndLogoutMenu: SideBarMenu[];
    setTagsAndLogoutMenu: React.Dispatch<React.SetStateAction<SideBarMenu[]>>;
  };
  openNewTagsWindowObject: {
    openNewTagsWindow: boolean;
    setOpenNewTagsWindow: React.Dispatch<React.SetStateAction<boolean>>;
  };

  selectedTagToEditObject: {
    selectedTagToEdit: SingleTagType | null;
    setSelectedTagToEdit: React.Dispatch<
      React.SetStateAction<SingleTagType | null>
    >;
  };

  tagsClickedObject: {
    tagsClicked: string[];
    setTagsClicked: React.Dispatch<React.SetStateAction<string[]>>;
  };
  searchQueryObject: {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  };

  isLoadingObject: {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  };
  showPlaceHolderObject: {
    showPlaceHolder: boolean;
    setShowPlaceHolder: React.Dispatch<React.SetStateAction<boolean>>;
  };
}
