const db = require('../db')
const {Actor }= require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const actors = [
    { 
      name: 'Leonardo DiCaprio', 
      age: 49, 
      alive: true, 
      image: 'https://www.koin.com/wp-content/uploads/sites/10/2016/05/dicaprio_33418505_ver1.0.jpg', 
    },  
    { 
      name: 'Tom Cruise', 
      age: 61, 
      alive: true, 
      image: 'https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg', 
      
    },
    { 
      name: 'Denzel Washington', 
      age: 69, 
      alive: true, 
      image: 'https://media.themoviedb.org/t/p/w500/jj2Gcobpopokal0YstuCQW0ldJ4.jpg', 
    
    },
    { 
      name: 'Scarlett Johansson', 
      age: 39, 
      alive: true, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg', 
    
    },
    { 
      name: 'Ryan Reynolds', 
      age: 47, 
      alive: true, 
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg', 

    }
  ]
 await Actor.insertMany(actors)
 console.log('Created actors!')
}

const run = async () => {
  await main()
  db.close()
}

run()
