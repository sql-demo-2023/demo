import axios, { getAxios } from '../../../utils/axios';
const URL = (
  process.env.NODE_ENV === 'production'
    ? process.env.NX_PROD_CATEGORY_URL
    : process.env.NX_DEV_CATEGORY_URL
).replaceAll('`', '');

export default async function handler(req, res) {
  const {
    data: { category },
  } = await getAxios({
    url: `http://localhost:3000/books`,
  });

  res.status(200).json({ categories: category });
}
