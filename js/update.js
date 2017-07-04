import physics from './physics'
import { handlePlayerInputs } from './controls'

export default function (mod, game) {
  const { entities } = game

  entities.forEach(e => physics(e, mod, game))

  handlePlayerInputs(game)
}
