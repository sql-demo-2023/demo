import { getAxios } from '../../../utils/axios';
const URL = (
  process.env.NODE_ENV === 'production'
    ? process.env.NX_PROD_URL
    : process.env.NX_DEV_URL
).replaceAll('`', '');

export default async function handler(req, res) {
  const books = await getAxios({ url: URL }).then((response) => {
    return response.data;
  });
  res.status(200).json({ books: books });
}
