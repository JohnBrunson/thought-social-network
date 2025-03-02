//import mongoose, {Schema, Document } from "mongoose";
import { Schema, Types, model, type Document } from 'mongoose';

interface IThought extends Document {
    thoughtText: string,
    createdAt: Date,
    username: String,
    reactions: IReaction[],
};

// should be a subdocument
interface IReaction extends Document {
    reactionId: Schema.Types.ObjectId,
    reactionBody: string, 
    username: string,
    createdAt: Date,
}
const reactionSchema = new Schema({
    reactionId: { 
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId() 
    },
    reactionBody: {type: String,
        required: true, 
        maxlength: 280},
    username: {
        type: String,
         required: true
        },
        // TODO: getter method required for createdAt. Unclear exactly what is meant by this.
    createdAt: {
        type: Date,
        default: Date.now },
});

const thoughtSchema = new Schema<IThought>({
    thoughtText: { type: String, required: true, minLength: 1, maxLength: 280},
    // TODO: getter method required for createdAt. Unclear exactly what is meant by this.
    createdAt: {
        type: Date, 
        default: Date.now 
    },
    username: {
        type: String, 
        required: true
    },
    reactions: [reactionSchema]
});


const Thought = model ('Thought', thoughtSchema);

export default Thought;