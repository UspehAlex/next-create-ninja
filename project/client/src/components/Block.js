import React from 'react';

const Block = ({ block, handleEdit, handleDelete }) => {
  return (
    <div>
      <h2>{block.title}</h2>
      <p>{block.description}</p>
      <p><a href={block.link}>{block.link}</a></p>
      <button onClick={() => handleEdit(block)}>Edit</button>
      <button onClick={() => handleDelete(block._id)}>Delete</button>
    </div>
  );
};

export default Block;
