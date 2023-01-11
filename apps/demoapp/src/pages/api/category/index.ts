import type { NextApiHandler } from 'next';
const data = [
  {
    id: 1,
    title: "I can't get out.",
    author: 'Danny Kautzer',
    genre: 'Eos',
    description:
      "I don't keep the same thing as \"I sleep when I was a body to cut it off from: that he shook his head sadly. 'Do I look like it?' he said. 'Fifteenth,' said the King, 'that only makes the world you.",
    isbn: '9780026734615',
    image: 'http://placeimg.com/480/640/any',
    published: '1971-03-14',
    publisher: 'Atque Earum',
  },
  {
    id: 2,
    title: 'Duchess and the.',
    author: "Laurel O'Kon",
    genre: 'Ad',
    description:
      "March.' As she said this, she was up to the Gryphon. 'Then, you know,' the Mock Turtle, 'they--you've seen them, of course?' 'Yes,' said Alice, a little quicker. 'What a curious feeling!' said.",
    isbn: '9791614561018',
    image: 'http://placeimg.com/480/640/any',
    published: '2009-10-12',
    publisher: 'Neque Rerum',
  },
  {
    id: 3,
    title: "Christmas.' And.",
    author: 'Abbie Wilderman',
    genre: 'Ut',
    description:
      "Pray how did you ever eat a bat?' when suddenly, thump! thump! down she came upon a low voice, 'Why the fact is, you know. Come on!' So they got thrown out to the door. 'Call the next witness.' And.",
    isbn: '9795601323054',
    image: 'http://placeimg.com/480/640/any',
    published: '2022-09-29',
    publisher: 'Exercitationem Voluptas',
  },
];
const categoryHandler: NextApiHandler = async (request, response) => {
  const { category = 'CS' } = request.body;
  console.log('api category', category);
  response.json({ data: data });
};

export default categoryHandler;
