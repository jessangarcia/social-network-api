const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const ReactionSchema = new Schema(
    {

    }
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        username: {},
        reactions: []

    },
    {
        toJSON: {},
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;