import { getAxios } from '../../../utils/axios';
export default async function handler(req, res) {
  const books = await getAxios().then((data) => data.data);
  console.log(books, 'books handler');
  res.status(200).json({ books: books });
}
