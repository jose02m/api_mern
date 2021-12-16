import { RequestHandler } from 'express'
import Video from '../models/Videos'

export const createVideo: RequestHandler = async (req, res) => {
  const video = new Video(req.body)
  const savedVideo = await video.save()
  res.json(savedVideo)
}

export const getVideo: RequestHandler = async (req, res) => {
  try {
    const videos = await Video.find()
    res.json(videos)
  } catch (error) {
    console.error(error)
  }
}

export const getVideoById: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id)
    res.json(video)
  } catch (error) {
    console.error(error)
  }
}

export const updateVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(video)
  } catch (error) {
    console.error(error)
  }
}

export const deleteVideo: RequestHandler = async (req, res) => {
  try {
    const video = await Video.findByIdAndDelete(req.params.id)
    res.json(video)
  } catch (error) {
    console.error(error)
  }
}
