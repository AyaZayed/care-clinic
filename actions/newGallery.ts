"use server";

export default async function newGallery(formData: FormData) {
  const before = formData.get("before") as string;
  const after = formData.get("after") as string;
}
