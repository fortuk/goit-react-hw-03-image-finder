import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api';
const apiKey = '16763452-f17d9c1e6c077c804b5291364';

const fetchImagesWithQuery = async (searchQuery, page = 1) => {
  const response = await axios(
    `/?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};

export default { fetchImagesWithQuery };
