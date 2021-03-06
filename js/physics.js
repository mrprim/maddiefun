import { canvasHeight } from './canvas'

const gravityMod = 30
const frictionMod = 15

export const move = (entity, mod, game) => {
  const origin = entity.getPosition()
  if (entity.immovable) {
    return
  }
  moveHorizontal(entity, mod)
  moveVertical(entity, mod)
  detectCollisions(entity, origin, game)
}

export const moveHorizontal = (entity, mod) => {
  entity.x += entity.speedH * mod
}

export const moveVertical = (entity, mod) => {
  entity.y -= entity.speedV * mod
}

export const fall = (entity) => {
  if (entity.hover) return
  if (entity.supported) {
    entity.speedV = entity.speedV > 0 ? entity.speedV : 0
    return
  }
  entity.speedV -= (entity.gravityMod || gravityMod)
}

export const friction = (entity, mod) => {
  if (!entity.supported) {
    return
  }
  const direction = entity.speedH > 0 ? 1 : entity.speedH < 0 ? -1 : 0

  if (direction === 1) {
    entity.speedH -= frictionMod
    if (entity.speedH < 0) entity.speedH = 0
  }

  if (direction === -1) {
    entity.speedH += frictionMod
    if (entity.speedH > 0) entity.speedH = 0
  }
}

export const detectCollisions = (entity, origin, game) => {
  detectHorizontalCollisions(entity, origin, game)
  detectVerticalCollisions(entity, origin, game)
}

export const detectHorizontalCollisions = (entity, origin, game) => {
  const entities = game.getActiveEntities()

  entities.forEach((e) => {
    if (e === entity) {
      return
    }

    if (origin.top >= e.getBottom() || origin.bottom <= e.getTop()) {
      return
    }

    if (origin.right <= e.getLeft() && entity.getRight() > e.getLeft()) {
      entity.onCollision('right', e, game)
      e.onCollidedWith('left', entity, game)
    }

    if (origin.left >= e.getRight() && entity.getLeft() < e.getRight()) {
      entity.onCollision('left', e, game)
      e.onCollidedWith('right', entity, game)
    }
  })
}

export const detectVerticalCollisions = (entity, origin, game) => {
  const entities = game.getActiveEntities()

  entity.supported = false
  entities.forEach((e) => {
    if (e === entity) {
      return
    }

    if (origin.left >= e.getRight() || origin.right <= e.getLeft()) {
      return
    }

    if (origin.bottom <= e.getTop() && entity.getBottom() >= e.getTop()) {
      entity.onCollision('bottom', e, game)
      e.onCollidedWith('top', entity, game)
    }

    if (origin.top >= e.getBottom() && entity.getTop() <= e.getBottom()) {
      entity.onCollision('top', e, game)
      e.onCollidedWith('bottom', entity, game)
    }
  })
}

function handleLevelBoundingBox (game) {
  const { player, offsetX } = game

  if (player.x - offsetX < 0) {
    player.x = 0
  }

  if (player.x > (game.level.width - player.width)) {
    player.x = game.level.width - player.width
  }

  if (player.y > canvasHeight) {
    player.y = 0
  }
}

export default (entity, mod, game) => {
  fall(entity, mod)
  friction(entity, mod)
  move(entity, mod, game)
  handleLevelBoundingBox(game)
}
