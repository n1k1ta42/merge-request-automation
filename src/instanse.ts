import axios from 'axios'

export const api = axios.create({
  headers: {
    'PRIVATE-TOKEN': process.env.GIT_LAB_TOKEN ?? '',
    'Content-Type': 'application/json',
  },
})
