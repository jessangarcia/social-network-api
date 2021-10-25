const { Schema, model, Types } = require('mongoose');
const moment = require('moment');
//https://mongoosejs.com/docs/schematypes.html#objectids

const ReactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            trim: true, 
            maxlength: 280
        },
        username: {
            type: String, 
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //https://momentjs.com/docs/#/use-it/
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY hh:mm A')
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
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
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY hh:mm A')
        },
        username: {
            type: String, 
            required: true
        },
        reactions: [ReactionSchema]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;