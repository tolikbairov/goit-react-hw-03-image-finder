const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "23305129-dc426c4ab0f279a7253128e3a";

export async function getImages(searchQuery, page) {
  const response = await fetch(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  const data = await response.json();

  return data.hits;
}
