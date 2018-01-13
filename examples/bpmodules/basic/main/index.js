const path = require('path')
const { Biglet } = require('../../../../src')

module.exports = class MainPagelet extends Biglet {
  constructor (...args) {
    super(...args)
    this.root = __dirname
    this.name = 'main biglet'
    this.data = {
      is: 'main biglet',
      po: {
        name: this.name
      }
    }
    this.domid = 'main'
    this.location = 'main'
    this.tpl = path.join(__dirname, './tpl/index')
    this.delay = 1000
  }

  fetch () {
    return this.sleep(this.delay)
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time))
  }
}
