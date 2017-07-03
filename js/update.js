export default function update (modifier, player) {
//  if (!isOnGround(player)) {
  player.verticalSpeed -= gravity
  player.y -= player.verticalSpeed * modifier
//  }

  if (player.y >= groundLine - player.height) {
    player.y = groundLine - player.height
  }

  if (player.x < 0) {
    player.x = canvas.width
  }

  if (player.x > canvas.width) {
    player.x = 0
  }

  if (38 in keysDown || 32 in keysDown) { // Player holding up
    if (isOnGround(player)) {
      player.verticalSpeed = player.jump
    }
  }

  if (37 in keysDown) { // Player holding left
    player.x -= player.speed * modifier
  }
  if (39 in keysDown) { // Player holding right
    player.x += player.speed * modifier
  }

  console.log(keysDown)
}
