import { Queue } from 'bullmq'
import { queueConfig } from './bullmq.config'

export const emailQueue = new Queue('email', queueConfig)
