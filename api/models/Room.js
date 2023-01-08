import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  maxPeople:{
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  photos: {
    type: [String],
  },
  desc: {
    type: String,
    required: true,
  },
  roomNumbers: [{number:Number, unavailableDates:{type:[Date]} }]
},
{timestamps: true}
);

export default mongoose.model("Room", RoomSchema)