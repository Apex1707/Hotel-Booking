// import mongoose from "mongoose";

// const roomSchema=new mongoose.Schema({
//     hotel:{type:String,ref:"Hotel",required:true},
//     roomType:{type:String,required:true},
//     pricePerNight:{type:Number,required:true},
//     amenities:{type:Array,required:true},
//     images:[{type:String}],
//     isAvailable:{type:Boolean,default:true},
// },{timestamps:true});

// const Room=mongoose.model("Room",roomSchema);

// export default Room;

import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hotel: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
        index: true  // Add index
    },
    roomType: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    amenities: { type: Array, required: true },
    images: [{ type: String }],
    isAvailable: { type: Boolean, default: true, index: true }  // Add index
}, { timestamps: true });

// Add compound index for common queries
roomSchema.index({ hotel: 1, isAvailable: 1 });

const Room = mongoose.model("Room", roomSchema);
export default Room;