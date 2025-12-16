import type { ConnectionOptions, JobsOptions, QueueOptions, WorkerOptions } from 'bullmq'

export const redisConnection: ConnectionOptions = {
  host: process.env.REDIS_HOST ?? '127.0.0.1',
  port: Number(process.env.REDIS_PORT ?? 6379),
  password: process.env.REDIS_PASSWORD
}

export const defaultJobOptions: JobsOptions = {
  attempts: 3,
  backoff: {
    type: 'exponential',
    delay: 5_000
  },
  removeOnComplete: true,
  removeOnFail: false
}

export const queueConfig: QueueOptions = {
  connection: redisConnection,
  defaultJobOptions
}

export const workerConfig: WorkerOptions = {
  connection: redisConnection,
  concurrency: 5
}
