"use server";

export default async function getPhotos(query: string) {
  "use server";

  const url = query
    ? `https://api.unsplash.com/search/photos?per_page=12&query=${query}`
    : "https://api.unsplash.com/photos?per_page=12&page=1";

  const res = await fetch(url, {
    headers: {
      "Accept-Version": "v1",
      Authorization: `Client-ID ${process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY}`,
    },
  });

  const data = await res.json();

  return data.results;
}
