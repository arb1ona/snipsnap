// useGlobalState.ts

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { v4 as uuidv4 } from "uuid";
import {
  initialSideBarMenu,
  initialDarkMode,
  initialTagsAndLogoutMenu,
} from "./constants";
import { fetchAllNotes, fetchAllTags } from "./api";
import {
  SideBarMenu,
  DarkModeType,
  SingleNoteType,
  SingleTagType,
  SingleCodeLanguageType,
  CodeLanguageCounterType,
  GlobalContextType,
} from "./types";

export function useGlobalState(): GlobalContextType {
  const [sideBarMenu, setSideBarMenu] =
    useState<SideBarMenu[]>(initialSideBarMenu);
  const [darkMode, setDarkMode] = useState<DarkModeType[]>(initialDarkMode);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openContentNote, setOpenContentNote] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allNotes, setAllNotes] = useState<SingleNoteType[]>([]);
  const [allTags, setAllTags] = useState<SingleTagType[]>([]);
  const [selectedNote, setSelectedNote] = useState<SingleNoteType | null>(null);
  const [isNewNote, setIsNewNote] = useState(false);
  const [selectedTags, setSelectedTags] = useState<SingleTagType[]>([]);
  const [selectedLanguage, setSelectedLanguage] =
    useState<SingleCodeLanguageType | null>(null);
  const [openConfirmationWindow, setOpenConfirmationWindow] = useState(false);
  const [codeLanguagesCounter, setCodeLanguagesCounter] = useState<
    CodeLanguageCounterType[]
  >([]);
  const [openTagsWindow, setOpenTagsWindow] = useState(false);
  const [openNewTagsWindow, setOpenNewTagsWindow] = useState(false);
  const [tagsAndLogoutMenu, setTagsAndLogoutMenu] = useState<SideBarMenu[]>(
    initialTagsAndLogoutMenu
  );
  const [selectedTagToEdit, setSelectedTagToEdit] =
    useState<SingleTagType | null>(null);
  const [tagsClicked, setTagsClicked] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [sharedUserId, setSharedUserId] = useState<string>("");
  const [showPlaceHolder, setShowPlaceHolder] = useState(false);
  const [swappedIndex, setSwappedIndex] = useState<number | null>(null);

  const { isLoaded, isSignedIn, user } = useUser();

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 640);
  };

  useEffect(() => {
    if (user) {
      setSharedUserId(user?.id);
    }
  }, [isLoaded, user]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    async function loadData() {
      if (isLoaded && isSignedIn && user) {
        const tags = await fetchAllTags(user.id);
        const notes = await fetchAllNotes(user.id);

        if (tags) {
          const allTag: SingleTagType = {
            _id: uuidv4(),
            name: "All",
            clerkUserId: user.id,
          };
          setAllTags([allTag, ...tags]);
        }

        if (notes) {
          const sortedNotes = notes.sort(
            (a, b) =>
              new Date(b.creationDate).getTime() -
              new Date(a.creationDate).getTime()
          );
          setAllNotes(sortedNotes);
        }

        setIsLoading(false);
      }
    }

    loadData();
  }, [isLoaded, isSignedIn, user]);

  useEffect(() => {
    setSelectedTags(selectedNote?.tags || []);
  }, [selectedNote]);

  useEffect(() => {
    if (!openContentNote) {
      const filteredNotes = allNotes.filter(
        (note) =>
          note.title.trim() !== "" ||
          note.description.trim() !== "" ||
          note.code.trim() !== ""
      );
      setAllNotes(filteredNotes);
    }
  }, [openContentNote, allNotes]);

  useEffect(() => {
    if (openContentNote && selectedNote) {
      const selectedIndex = allNotes.findIndex(
        (note) => note._id === selectedNote._id
      );
      if (selectedIndex > 0) {
        const updatedNotes = [...allNotes];
        [updatedNotes[0], updatedNotes[selectedIndex]] = [
          updatedNotes[selectedIndex],
          updatedNotes[0],
        ];
        setAllNotes(updatedNotes);
        setSwappedIndex(selectedIndex);
      }
    } else if (!openContentNote && swappedIndex !== null) {
      const updatedNotes = [...allNotes];
      [updatedNotes[0], updatedNotes[swappedIndex]] = [
        updatedNotes[swappedIndex],
        updatedNotes[0],
      ];
      setAllNotes(updatedNotes);
      setSwappedIndex(null);
    }
  }, [openContentNote, selectedNote, allNotes, swappedIndex]);

  useEffect(() => {
    const languageCounts: Record<string, number> = {};
    allNotes.forEach((note) => {
      const language = note.language.toLowerCase();
      languageCounts[language] = (languageCounts[language] || 0) + 1;
    });

    const convertedLanguageCounts: CodeLanguageCounterType[] = Object.entries(
      languageCounts
    )
      .map(([language, count]) => ({ language, count }))
      .sort((a, b) => b.count - a.count);

    setCodeLanguagesCounter(convertedLanguageCounts);
  }, [allNotes]);

  useEffect(() => {
    if (openTagsWindow) {
      setOpenTagsWindow(false);
    }
    setSelectedNote(null);
  }, [sideBarMenu]);

  return {
    sideBarMenuObject: { sideBarMenu, setSideBarMenu },
    darkModeObject: { darkMode, setDarkMode },
    openSideBarObject: { openSideBar, setOpenSideBar },
    openContentNoteObject: { openContentNote, setOpenContentNote },
    isMobileObject: { isMobile, setIsMobile },
    allNotesObject: { allNotes, setAllNotes },
    selectedNoteObject: { selectedNote, setSelectedNote },
    isNewNoteObject: { isNewNote, setIsNewNote },
    allTagsObject: { allTags, setAllTags },
    selectedTagsObject: { selectedTags, setSelectedTags },
    selectedLanguageObject: { selectedLanguage, setSelectedLanguage },
    openConfirmationWindowObject: {
      openConfirmationWindow,
      setOpenConfirmationWindow,
    },
    codeLanguageCounterObject: {
      codeLanguagesCounter,
      setCodeLanguagesCounter,
    },
    openTagsWindowObject: { openTagsWindow, setOpenTagsWindow },
    tagsAndLogoutMenuObject: { tagsAndLogoutMenu, setTagsAndLogoutMenu },
    openNewTagsWindowObject: { openNewTagsWindow, setOpenNewTagsWindow },
    selectedTagToEditObject: { selectedTagToEdit, setSelectedTagToEdit },
    tagsClickedObject: { tagsClicked, setTagsClicked },
    searchQueryObject: { searchQuery, setSearchQuery },
    isLoadingObject: { isLoading, setIsLoading },
    sharedUserIdObject: { sharedUserId, setSharedUserId },
    showPlaceHolderObject: { showPlaceHolder, setShowPlaceHolder },
  };
}
