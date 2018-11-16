/*eslint-disable no-console */
import webpack from 'webpack'
import webpackConfigure from '../webpack.config.prod'
import colors from 'colors'

process.env.NODE_ENV = 'production'  // this assures the Bable dev config (for hot reloading) doesn't apply.
console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue)
webpack(webpackConfigure).run((err, stats) => {
  if (err) { // so a fatal error occurred. stop here.
    console.log(err.bold.red)
    return 1
  }

  const jsonStats = stats.toJSON()
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red))
  }
  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warning: '.bold.yellow)
    jsonStats.warnings.map(warring => console.log(warring.yellow))
  }
  console.log(`Webpack stats: ${stats}`)

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. it\'s ready to roll!'.green)
  return 0
})
