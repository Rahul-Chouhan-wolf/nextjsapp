import jwt from 'jsonwebtoken'

export const verifyJWT = (req, res, next) => {
  const token = req.cookies.authToken

  if (!token) {
    return res.status(403).json({ error: 'Access denied, no token provided' })
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' })
    }

    req.user = decoded // Attach the user data to the request object
    next() // Proceed to the next middleware or route handler
  })
}
