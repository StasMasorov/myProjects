import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];


export default function getInvalidBooks (books) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive().integer(),
    link: yup.string().min(1).url(),
    genre: yup.string().oneOf(genres),
  });
  const result = books.filter((book) => !schema.isValidSync(book))
  return result;
};
