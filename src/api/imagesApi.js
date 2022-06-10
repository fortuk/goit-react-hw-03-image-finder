const API_KEY = '23027480-c70d45ac3781d0e477b4a7117';
const BASE_URL = 'https://pixabay.com/api/';

function fetchImagesWithQuery(query, page) {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(response => response.json());
}
const api = { fetchImagesWithQuery };
export default api;
