import Entity from './Entity'

export default class SolidEntity extends Entity {
  onCollidedWithTop (collider) {
    collider.supported = true
    collider.setBottom(this.getTop())
    collider.speedV = 0
  }

  onCollidedWithBottom (collider) {
    collider.setTop(this.getBottom())
    collider.speedV = 0
  }

  onCollidedWithLeft (collider) {
    collider.setRight(this.getLeft())
    collider.speedH = 0
  }

  onCollidedWithRight (collider) {
    collider.setLeft(this.getRight())
    collider.speedH = 0
  }

  onCollidedWith (side, collider, game) {
    if (side === 'top') this.onCollidedWithTop(collider)
    if (side === 'bottom') this.onCollidedWithBottom(collider)
    if (side === 'left') this.onCollidedWithLeft(collider)
    if (side === 'right') this.onCollidedWithRight(collider)
  }
}
