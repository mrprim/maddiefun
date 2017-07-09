import Entity from './Entity'

export default class Gem extends Entity {
  constructor (left, top) {
    super()
    this.setLeft(left)
    this.setTop(top)
    this.hover = true
    this.width = 32
    this.height = 32
    this.image = new Image()
    this.image.src = 'assets/sprites/Gem/gem_default_0.png'
  }

  onCollidedWith (side, collider, game) {
    game.score += 1
    this.destroy()

    game.level.spawnGem(game)
  }
}
