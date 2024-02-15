const { Thought, User, Reaction } = require('../models');
const { Types } = require('mongoose');

module.exports = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ message: 'Thought not found' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err)
    }
  },
  // create a new post
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
  }
},

// delete a post
async deleteThought(req,res) {
  try {
      const thought = await Thought.findByIdAndDelete({_id:req.params.thoughtId});
      res.status(200).json(thought);
  } catch (err) {
      res.status(500).json(err);
  }
},

// update a post 
async updateThoughtById(req, res) {
  try {
    const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
      new: true,
    });
    if (!thought) {
      res.status(404).json({ message: 'Thought not found' });
    } else {
      res.json(thought);
    }
  } catch (err) {
    res.status(500).json(err);
  }
},

// create a reaction for post 
async createReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
        {_id:req.params.thoughtId},
        {$addToSet: {reactions: req.body}},
        {runValidators: true, new: true}
    );
    thought ? res.json(thought) : res.status(404).json({message: notFound});
} catch (error) {
    res.status(500).json(error);
}
},

// delete reavtion for post 
async deleteReaction(req, res) {
  try {
    const thought = await Thought.findOneAndUpdate(
        {_id: req.params.thoughtId},
        {$pull: {reactions: {reactionId: req.params.reactionId}}},
        {runValidators: true, new: true}
    );

    thought ? res.json(thought) : res.status(404).json({message: notFound});
} catch (error) {
    res.status(500).json(error);
}
},
};
module.exports = thoughtController;