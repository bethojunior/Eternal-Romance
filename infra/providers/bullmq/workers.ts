import { Worker } from 'bullmq'
import { workerConfig } from './bullmq.config'

export const emailWorker = new Worker(
  'email',
  async (job) => {
    const { to, subject } = job.data

    console.log('📧 Enviando email para', to)

    return true
  },
  workerConfig
)

emailWorker.on('completed', (job) => {
  console.log(`✅ Job ${job.id} finalizado`)
})

emailWorker.on('failed', (job, err) => {
  console.error(`❌ Job ${job?.id} falhou`, err)
})
