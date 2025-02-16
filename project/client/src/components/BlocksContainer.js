import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Block from './Block';
import BlockForm from './BlockForm';

const BlocksContainer = ({ page }) => {
  const [blocks, setBlocks] = useState([]);
  const [editing, setEditing] = useState(false);
  const [blockToEdit, setBlockToEdit] = useState({});

  useEffect(() => {
    axios.get('/api/blocks')
      .then((response) => {
        setBlocks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleCreate = (block) => {
    setBlocks([...blocks, block]);
  };

  const handleEdit = (block) => {
    setEditing(true);
    setBlockToEdit(block);
  };

  const handleDelete = (id) => {
    axios.delete(`/api/blocks/${id}`)
      .then((response) => {
        setBlocks(blocks.filter((block) => block._id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdate = (block) => {
    axios.put(`/api/blocks/${block._id}`, block)
      .then((response) => {
        setBlocks(blocks.map((b) => b._id === block._id ? response.data : b));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>{page}</h1>
      <BlockForm handleCreate={handleCreate} />
      {blocks.map((block) => (
        <Block key={block._id} block={block} handleEdit={handleEdit} handleDelete={handleDelete} />
      ))}
      {editing && (
        <BlockForm blockToEdit={blockToEdit} handleUpdate={handleUpdate} />
      )}
    </div>
  );
};

export default BlocksContainer;
