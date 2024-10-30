import {Router} from 'express'
import * as pageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

const router = Router()

router.get('/', pageController.home)

router.get('/ChatBot', pageController.ChatBot)

router.get('/GeradordeImagem', pageController.GeradorDeImagem)

router.get('/AnimadordeImagem', pageController.AnimadorDeImagem)

router.get('/search', searchController.search)

export default router 