import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  savedDeals: [{type: Schema.Types.ObjectId, ref: 'Deal'}]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}
