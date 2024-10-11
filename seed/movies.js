const db = require('../db')
const {Movie, Actor}= require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const actors = await Actor.find()
  const movies = [
    { 
      title: 'Titanic', 
      runtime: 195, 
      yearReleased: 1997, 
      description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/22/Titanic_poster.jpg',
      actors: actors[0]._id
    },
    { 
      title: 'Inception', 
      runtime: 148, 
      yearReleased: 2010, 
      description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Inception_ver3.jpg',
      actors: actors[0]._id
    },
    { 
      title: 'Top Gun', 
      runtime: 110, 
      yearReleased: 1986, 
      description: 'As students at the United States Navy\'s elite fighter weapons school compete, one daring young pilot learns a few things from a civilian instructor.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Top_Gun_%28film%29.png',
      actors: actors[1]._id
    },
    { 
      title: 'Mission: Impossible - Fallout', 
      runtime: 147, 
      yearReleased: 2018, 
      description: 'Ethan Hunt and his IMF team must track down stolen plutonium while being pursued by a CIA agent after a mission goes wrong.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/72/Mission_Impossible_Fallout.jpg',
      actors: actors[1]._id
    },
    { 
      title: 'Training Day', 
      runtime: 122, 
      yearReleased: 2001, 
      description: 'A rookie cop spends his first day as a Los Angeles narcotics officer with a rogue detective who isn\'t what he appears to be.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/22/Training_Day.jpg',
      actors: actors[2]._id
    },
    { 
      title: 'Fences', 
      runtime: 139, 
      yearReleased: 2016, 
      description: 'A working-class African American father struggles to provide for his family and cope with his own feelings of failure.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Fences_poster.jpg',
      actors: actors[2]._id
    },
    { 
      title: 'Lost in Translation', 
      runtime: 102, 
      yearReleased: 2003, 
      description: 'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Lost_in_Translation_poster.jpg',
      actors: actors[3]._id
    },
    { 
      title: 'Black Widow', 
      runtime: 134, 
      yearReleased: 2021, 
      description: 'Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/2/20/Black_Widow_film_poster.jpg',
      actors: actors[3]._id
    },
    { 
      title: 'Deadpool', 
      runtime: 108, 
      yearReleased: 2016, 
      description: 'A former special forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers and a quest for revenge.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Deadpool_poster.jpg',
      actors: actors[4]._id
    },
    { 
      title: 'The Proposal', 
      runtime: 108, 
      yearReleased: 2009, 
      description: 'A pushy boss forces her young assistant to marry her in order to keep her visa status in the U.S. and avoid deportation from Canada.', 
      poster: 'https://upload.wikimedia.org/wikipedia/en/4/4a/The_Proposal_poster.jpg',
      actors: actors[4]._id
    }
  ]

  await Movie.insertMany(movies)
  console.log('Created movies!')
}

const run = async () => {
  await main()
  db.close()
}

run()
