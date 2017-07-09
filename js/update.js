import physics from './physics'
import { handlePlayerInputs } from './controls'

export default function (mod, game) {
  if (game.mode === 'play') {
    game.getActiveEntities().forEach(e => physics(e, mod, game))
  }

  handlePlayerInputs(game)
}
