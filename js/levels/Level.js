export default class Level {
  constructor () {
    this.entities = []
    this.width = 1000
    this.spawnX = 50
    this.spawnY = 0
  }

  reset () {
    this.entities = []
  }
}
