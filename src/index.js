import server from 'server'
import { get, post } from 'server/router'
import { render, json } from 'server/reply'
import timeStamp from 'time-stamp'

import getProducts from './services/getProducts'

server([get('/listProducts', getProducts)])

console.log(
  `[${timeStamp('MM/DD/YYYY @ HH:mm:ss')}] LISTENING http://localhost:3000`
)
