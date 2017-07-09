import { requestAnimationFrame } from './shim.js'
import { registerControls } from './controls'
import update from './update'

import Player from './entities/Player/Player'
import Game from './Game'

const player = new Player()
const game = new Game(player)
registerControls(game)

function main () {
  const timestep = 1000 / 60
  const now = Date.now()
  let delta = now - then

  let missedFrames = 0
  while (delta >= timestep) {
    update(delta / 1000, game)
    game.scroll()
    game.clock++
    delta -= timestep
    missedFrames++

    if (missedFrames > 256) {
      game.mode = 'pause'
      delta = 0
    }
  }

  game.render()

  then = now
  requestAnimationFrame.call(window, main)
}

var then = Date.now()
game.reset()
main()
