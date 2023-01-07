import axios from 'axios';
export default async function handler(req, res) {
  const books = await axios
    .get('https://fakerapi.it/api/v1/books?_quantity=3')
    .then((data) => data.data);
  res.status(200).json({ books: books });
}
