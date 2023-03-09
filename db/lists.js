import mongoose from "mongoose";


// CREATE USER HERE

const ItemSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
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
