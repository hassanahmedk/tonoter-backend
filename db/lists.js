import mongoose from "mongoose";
import { nanoid } from "nanoid";

// CREATE USER HERE

const ItemSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
    required: true,
    default: () => nanoid(7),
    index: { unique: true },
  },
  data: String,
  important: Boolean,
});

export const ListsSchema = new mongoose.Schema({
  name: String,
  items: [ItemSchema],
});

// const user = mongoose.model('User', userSchema);

// const item = mongoose.model('Item', itemSchema);

// const ListModel = mongoose.model("Notes", ListSchema);

// export default ListModel;
