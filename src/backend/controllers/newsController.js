import { scrapeClimatempoComPuppeteer } from '../service/webScraping/index.js'

class newsController {
  async getNews(req, res) {
    try {
      const data = await scrapeClimatempoComPuppeteer()
      return res.status(200).json(data)
    } catch (error) {
      console.error('Erro ao obter notícias:', error)
      return res.status(500).json({ error: 'Erro ao obter notícias' })
    }
  }
}

export default newsController
