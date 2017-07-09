export default class Level {
  constructor () {
    this.entities = []
    this.width = 1000
    this.spawnX = 50
    this.spawnY = 0
  }

  reset (game) {
    this.resetEntities()
    game.player.reset()
    game.player.setLeft(this.spawnX)
    game.player.setTop(this.spawnY)
  }

  resetEntities () {
    this.entities = []
  }
}
