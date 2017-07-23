import Entity from './Entity'

export default class SolidEntity extends Entity {
  onCollidedWithTop (collider) {
    collider.supported = true
    collider.setBottom(this.getTop())
    collider.speedV = 0
  }

  onCollidedWithBottom (collider, game) {
    collider.setTop(this.getBottom())
    collider.speedV = 0
  }

  onCollidedWithLeft (collider, game) {
    collider.setRight(this.getLeft())
    collider.speedH = 0
  }

  onCollidedWithRight (collider, game) {
    collider.setLeft(this.getRight())
    collider.speedH = 0
  }

  onCollidedWith (side, collider, game) {
    if (side === 'top') this.onCollidedWithTop(collider, game)
    if (side === 'bottom') this.onCollidedWithBottom(collider, game)
    if (side === 'left') this.onCollidedWithLeft(collider, game)
    if (side === 'right') this.onCollidedWithRight(collider, game)
  }
}
