import { Button } from '@mui/material';
import React, { useState } from 'react';

const Loader: React.FC = () => {
  const [data, setData] = useState([]);
  async function loadFeedbackHandler() {
    const res = await fetch(`/api/books`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'api');
        return data.books;
      });
    setData(res);
  }
  const btnClickHandler = () => {
    loadFeedbackHandler();
  };
  return (
    <>
      <h1>This is a loader page. Data Loading from API</h1>
      <Button
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
        onClick={btnClickHandler}
      >
        Load book
      </Button>
      <div>{data && data.map((d) => <li key={d.id}>{d.title}</li>)}</div>
    </>
  );
};

export default Loader;
