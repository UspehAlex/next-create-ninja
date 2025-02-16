const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the Block model
const Block = require('./models/Block');

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to create a new block
app.post('/api/blocks', (req, res) => {
  const block = new Block(req.body);
  block.save((err, block) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(block);
    }
  });
});

// API endpoint to get all blocks
app.get('/api/blocks', (req, res) => {
  Block.find().then((blocks) => {
    res.send(blocks);
  }).catch((err) => {
    res.status(500).send(err);
  });
});

// API endpoint to update a block
app.put('/api/blocks/:id', (req, res) => {
  Block.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, block) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(block);
    }
  });
});

// API endpoint to delete a block
app.delete('/api/blocks/:id', (req, res) => {
  Block.findByIdAndRemove(req.params.id, (err, block) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({ message: 'Block deleted successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
