import mongoose from 'mongoose'

const Schema = mongoose.Schema

const commentSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const dealSchema = new Schema({
  name: {type: String, required: true},
  origPrice: {type: Number, required: true},
  salePrice: {type: Number, required: true},
  storeLink: {type: String, required: true},
  details: {type: String, required: true},
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  comments: [commentSchema],
}, {
  timestamps: true
})

const Deal = mongoose.model('Deal', dealSchema)

export {
  Deal
}