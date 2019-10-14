import Axios from 'axios';

const gitApi = Axios.create({
  baseURL: 'https://api.github.com/',
});

export default gitApi;
