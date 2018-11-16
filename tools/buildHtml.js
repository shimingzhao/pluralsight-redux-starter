import fs from 'fs'
import cheerio from 'cheerio'
import colors from 'colors'

/*eslint-disable import/default */
fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err)
  }
  const $ = cheerio.load(markup)

  // since a separate spreadsheet is only utilzed for the production build, need to dyanmica
  $('head').prepend('<Link rel="stylesheet" href="styles.css">')

  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err) {
      return console.log(err)
    }
    console.log('index.html written to /dist'.green)
  })
})
