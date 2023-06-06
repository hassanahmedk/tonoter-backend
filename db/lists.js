import mongoose from "mongoose";
<<<<<<< HEAD
=======

>>>>>>> fff58c36541858e9073baad28aaac5310c59c230

// CREATE USER HERE

const ItemSchema = new mongoose.Schema({
  uniqueId: {
    type: String,
<<<<<<< HEAD
    default: new mongoose.Types.ObjectId()
=======
>>>>>>> fff58c36541858e9073baad28aaac5310c59c230
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
