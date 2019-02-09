import './setup'
import server from 'server'
import { get, post } from 'server/router'
import { render, json } from 'server/reply'

import getProducts from './services/getProducts'

server([get('/getProducts', getProducts)])

console.log('stripe-server: http://localhost:3000')
