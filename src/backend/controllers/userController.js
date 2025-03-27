import getUser from '../service/getUser.js'

class UserController {
  async getUser(req, res) {
    try {
      const { email } = req.query

      if (!email) {
        return res.status(401).json({
          message: 'email field required',
        })
      }

      const user = await getUser(email)

      if (!user) {
        return res.status(401).json({
          message: 'user not found',
        })
      }

      return res.status(201).json({ user })
    } catch (err) {
      console.error('Erro no signin:', err)
      if (!res.headersSent) {
        return res.status(500).json({ error: 'Internal server error' })
      }
    }
  }
}

export default UserController
