import { create } from 'axios';

const api = create({
  baseURL: 'http://localhost:3333',
});

// para android é necessário configurar diferentemente a baseURL
export default api;
