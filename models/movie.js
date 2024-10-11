const { Schema } = require('mongoose')

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    yearReleased: { type: Number, required: true },
    description: { type: String, required: true },
    poster: { type: String, required: true },
    actor_id: { type: Schema.Types.ObjectId, ref: 'Movie'}
  },
  { timestamps: true }
)

module.exports = movieSchema
