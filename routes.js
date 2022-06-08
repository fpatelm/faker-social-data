import {fb} from './data/fb/index.js'
import {whatsapp} from './data/whatsapp/index.js'
import express from 'express'

const router = express.Router();

fb(router);
whatsapp(router);

export let route = router;