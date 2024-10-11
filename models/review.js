const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    score: { type: Number, enum: [1,2,3,4,5],required: true },
    comment: { type: String, required: true },
    movie_id: { type: Schema.Types.ObjectId, ref: 'Movie' }
  },
  { timestamps: true }
)

module.exports = reviewSchema
