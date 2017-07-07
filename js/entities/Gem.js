import Entity from './Entity'

export default class Gem extends Entity {
  constructor () {
    super()
    this.hover = true
    this.width = 32
    this.height = 32
    this.image = new Image()
    this.image.src = 'assets/gem.png'
  }

  reset () {

  }

  onCollidedWith (side, collider, game) {
    game.score += 1
    this.destroy()

    var g = new Gem()
    g.setTop(170)
    g.setLeft(Math.floor(Math.random() * 424 + 1))
    game.entities.push(g)
  }
}
