import React, { useState } from 'react';
import axios from 'axios';

const BlockForm = ({ handleCreate }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [page, setPage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const block = { title, description, link, page };
    axios.post('/api/blocks', block)
      .then((response) => {
        handleCreate(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <br />
      <label>Description:</label>
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      <br />
      <label>Link:</label>
      <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
      <br />
      <label>Page:</label>
      <input type="text" value={page} onChange={(e) => setPage(e.target.value)} />
      <br />
      <button type="submit">Create Block</button>
    </form>
  );
};

export default BlockForm;
