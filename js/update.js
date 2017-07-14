import physics from './physics'
import { handlePlayerInputs } from './controls'
import { PLAY } from './constants/gameModes'

export default function (mod, game) {
  if (game.mode === PLAY) {
    game.getActiveEntities().forEach(e => physics(e, mod, game))
  }

  handlePlayerInputs(game)
}
