import { SingleNoteType, SingleTagType } from "./types";

export async function fetchAllNotes(userId: string) {
  try {
    const response = await fetch(`/api/snippets?clerkId=${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch snippets");
    }
    const data: { notes: SingleNoteType[] } = await response.json();
    return data.notes;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchAllTags(userId: string) {
  try {
    const response = await fetch(`/api/tags?clerkId=${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch tags");
    }
    const data: { tags: SingleTagType[] } = await response.json();
    return data.tags;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function updateNoteInDb(note: SingleNoteType) {
  try {
    const response = await fetch(`/api/snippets?snippetId=${note._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating note:", error);
  }
}
