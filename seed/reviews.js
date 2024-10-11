const db = require('../db')
const {Review, Movie} = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const movies = await Movie.find()
  const reviews = [
    { 
      score: 5, 
      comment: 'An absolute classic! Loved it.', 
      movie: movies[0]._id 
    },
    { 
      score: 4, 
      comment: 'Great action and story!', 
      movie: movies[1]._id 
    },
    { 
      score: 5, 
      comment: 'Visually stunning and emotionally engaging.', 
      movie: movies[2]._id 
    },
    { 
      score: 3, 
      comment: 'Fun but predictable.', 
      movie: movies[3]._id 
    },
    { 
      score: 4, 
      comment: 'A thrilling ride from start to finish!', 
      movie: movies[4]._id 
    },
    { 
      score: 5, 
      comment: 'Epic! A must-watch for Marvel fans.', 
      movie: movies[5]._id 
    },
    { 
      score: 4, 
      comment: 'A fantastic reboot of the franchise.', 
      movie: movies[6]._id 
    },
    { 
      score: 5, 
      comment: 'Intense and well-crafted.', 
      movie: movies[7]._id 
    },
    { 
      score: 4, 
      comment: 'Stylish and thrilling!', 
      movie: movies[8]._id 
    },
    { 
      score: 3, 
      comment: 'Good action, but the plot could be better.', 
      movie: movies[9]._id 
    }
  ]

  await Review.insertMany(reviews)
  console.log('Created reviews!')
}

const run = async () => {
  await main()
  db.close()
}

run()
