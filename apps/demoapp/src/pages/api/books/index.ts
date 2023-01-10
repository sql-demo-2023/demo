import { getAxios } from '../../../utils/axios';

export default async function handler(req, res) {
  const books = await getAxios().then((response) => {
    return response.data;
  });
  res.status(200).json({ books: books });
}
