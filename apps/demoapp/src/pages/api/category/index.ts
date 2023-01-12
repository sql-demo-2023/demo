import axios, { getAxios } from '../../../utils/axios';
const URL = (
  process.env.NODE_ENV === 'production'
    ? process.env.NX_PROD_CATEGORY_URL
    : process.env.NX_DEV_CATEGORY_URL
).replaceAll('`', '');

export default async function handler(req, res) {
  const categories = await getAxios({
    url: `http://localhost:3000/category`,
  });

  // console.log(categories, 'api');
  res.status(200).json({ categories: categories });
}
