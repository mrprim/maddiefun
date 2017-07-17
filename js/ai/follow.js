export default (entity, target) => {
  if (target.x < entity.x) {
    entity.goLeft()
  } else {
    entity.goRight()
  }
}
