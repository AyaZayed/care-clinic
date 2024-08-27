import React from "react";

export default function NewGalleryItem() {
  return (
    <form>
      <input type="text" name="before" placeholder="Before" />
      <input type="text" name="after" placeholder="After" />
      <button type="submit">+</button>
    </form>
  );
}
