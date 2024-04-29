'use server';
const API_KEY = process.env.GOOGLE_BOOKS_API_KEY || '';

export const fetchBooksFromAPI = async (query, page, itemsPerPage = 24) => {
    const startIndex = (page - 1) * itemsPerPage;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        query
    )}&startIndex=${startIndex}&maxResults=${itemsPerPage}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
        books: data.items ? data.items.map(item => item.volumeInfo) : [],
        totalItems: data.totalItems || 0,
    };
};
