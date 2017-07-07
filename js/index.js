import { requestAnimationFrame } from './shim.js'
import * as canvas from './canvas'
import { registerControls } from './controls'
import update from './update'

import Player from './entities/Player/Player'
import Scoreboard from './entities/Scoreboard'
import Level0 from './levels/Level0'

const player = new Player()
const scoreboard = new Scoreboard()
const level = new Level0()
const game = {}
game.ctx = canvas.init()
game.keysDown = {}

game.score = 0
game.clock = 0
game.player = player
game.level = level
game.entities = []
game.entities.push(player)
game.entities = game.entities.concat(level.entities)
game.entities.push(scoreboard)
game.activeEntities = function () {
  return this.entities.filter((e) => !e.inactive)
}
game.reset = () => {
  game.entities.forEach(e => e.reset())
}

registerControls(game)

function render () {
  canvas.clear(game.ctx)
  game.activeEntities().forEach(e => e.render(game))
}

function main () {
  const timestep = 1000 / 60
  const now = Date.now()
  let delta = now - then

  while (delta >= timestep) {
    update(delta / 1000, game)
    delta -= timestep
    game.clock += 1
  }

  render()

  then = now
  requestAnimationFrame.call(window, main)
}

// Let's play this game!
var then = Date.now()
game.reset()
main()
