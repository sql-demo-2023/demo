import React, { useEffect, useState } from 'react';
const Loader: React.FC = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function loadFeedbackHandler() {
      const res = await fetch(`/api/books`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data, 'api');
          return data.books;
        });
      setData(res.data);
    }
    loadFeedbackHandler();
  }, []);
  return (
    <>
      <h1>This is a loader. Data Loading from API</h1>
      <div>{!data && <p>isLoading...</p>}</div>
      <div>{data && data.map((d) => <li key={d.id}>{d.title}</li>)}</div>
    </>
  );
};

export default Loader;
