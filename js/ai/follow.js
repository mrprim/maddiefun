export default (entity, target) => {
  if (target.x < entity.x) {
    entity.moveLeft()
  } else {
    entity.moveRight()
  }
}
