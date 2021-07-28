const express = require('express')
const app = express()
const session = require('express-session')
const fs = require('fs')

app.use(session({
  secret: 'secret code',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 // 쿠키유효시간
  }
}))

// eslint-disable-next-line no-unused-vars
const server = app.listen(3000, () => {
  console.log('Server started. port 3000.')
})

let sql = require('./sql.js')

// eslint-disable-next-line no-path-concat
fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경시 재시작 없이 반영되도록 함')
  delete require.cache[require.resolve('./sql.js')]
  sql = require('./sql.js')
})

const db = {
  database: 'dev',
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'mariadb'
}

// eslint-disable-next-line no-unused-vars
const dbPool = require('mysql').createPool(db)

app.post('/api/login', async (request, res) => {
  request.session.email = 'asb@abc.com'
  res.send('ok')
})
app.post('/api/logout', async (request, res) => {
  request.session.destroy()
  res.send('ok')
})

app.post('/api/:alias', async (request, res) => {
  if (!request.session.email) {
    return res.status(401).send({ error: '로그인이 필요합니다' })
  }
  try {
    res.send(await req.db(request.params.alias))
  } catch (err) {
    res.status(500).send({
      error: err
    })
  }
})

const req = {
  async db (alias, param = [], where = '') {
    return new Promise((resolve, reject) => dbPool.query(sql[alias].query + where, param, (error, rows) => {
      if (error) {
        // eslint-disable-next-line eqeqeq
        if (error.code != 'ER_DUP_ENTRY') {
          console.log(error)
        }
        resolve({
          error
        })
      } else resolve(rows)
    }))
  }
}
