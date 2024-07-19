export const getBooksBySearchTerm = async (searchTerm, currentIndex = 0) => {
  // handle empty search term
  if (searchTerm === "") {
    throw new Error("No search term entered!");
  }

  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&projection=lite&startIndex=${currentIndex}`
  );

  if (!response.ok) {
    throw new Error("Fetch failed!");
  }

  const data = await response.json();
  // handle no results
  if (data.totalItems === 0) {
    throw new Error(`Search for ${searchTerm} returned no results`);
  }

  return data;
};
