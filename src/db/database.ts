import mongoose from 'mongoose'
import config from '../config'

(async ()  => {
  try{
    await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATASE}`)
    console.log('DB is conected')
  } catch(error) {
    console.error(error)
  }
})()