const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Actor, Movie, Review } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is the root!')
})

app.get('/actors', async (req, res) => {
  const actors = await Actor.find({})
  res.json(actors)
})

app.get('/actors/:id', async (req, res) => {
  try {
    const { id } = req.params
    const actor = await Actor.findById(id)
    if (!actor) throw Error('Actor not found')
    res.json(actor)
  } catch (e) {
    console.log(e)
    res.send('Actor not found!')
  }
})

app.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  res.json(movies)
})

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params
    const movie = await Movie.findById(id)
    if (!movie) throw Error('Movie not found')
    res.json(movie)
  } catch (e) {
    console.log(e)
    res.send('Movie not found!')
  }
})

app.get('/reviews', async (req, res) => {
  const reviews = await Review.find({}).populate('movie')
  res.json(reviews)
})

app.get('/reviews/:id', async (req, res) => {
  try {
    const { id } = req.params
    const review = await Review.findById(id).populate('movie')
    if (!review) throw Error('Review not found')
    res.json(review)
  } catch (e) {
    console.log(e)
    res.send('Review not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
