const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {}
);

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            minlength: 1, 
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        username: {
            type: String, 
            required: true
        },
        reactions: [ReactionSchema]

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