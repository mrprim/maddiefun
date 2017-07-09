export const registerControls = function (game) {
  const { keysDown } = game
  window.addEventListener('keydown', function (e) {
    keysDown[e.keyCode] = true
  }, false)

  window.addEventListener('keyup', function (e) {
    delete keysDown[e.keyCode]
  }, false)
}

export const handlePlayerInputs = function (game) {
  const { keysDown, player } = game

  if (27 in keysDown) { // Player holding Esc
    if (!game.pausePressed) {
      game.pausePressed = true
      game.mode = game.mode === 'pause' ? 'play' : 'pause'
    }
  } else {
    game.pausePressed = false
  }

  if (38 in keysDown || 32 in keysDown) { // Player holding up
    player.jump(game)
  }

  if (37 in keysDown) { // Player holding left
    player.goLeft()
  }
  if (39 in keysDown) { // Player holding right
    player.goRight()
  }
}
