import { requestAnimationFrame } from './shim.js'
import * as canvas from './canvas'
import { registerControls } from './controls'
import update from './update'

import Player from './entities/Player'
import Ground from './entities/Ground'
import Scoreboard from './entities/Scoreboard'

const player = new Player()
const ground = new Ground()
const platform = new Ground()
platform.x = 150
platform.y = 360
platform.width = 50
platform.height = 8
const scoreboard = new Scoreboard()

const game = {}
game.ctx = canvas.init()
game.keysDown = {}

game.score = 0
game.player = player
game.ground = ground
game.entities = []
game.entities.push(player)
game.entities.push(ground)
game.entities.push(platform)
game.entities.push(scoreboard)

registerControls(game)

function reset () {
  game.entities.forEach(e => e.reset())
}

function render () {
  canvas.clear(game.ctx)
  game.entities.forEach(e => e.render(game))
}

function main () {
  var now = Date.now()
  var delta = now - then

  update(delta / 1000, game)
  render()

  then = now

  requestAnimationFrame.call(window, main)
}

// Let's play this game!
var then = Date.now()
reset()
main()
