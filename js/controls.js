const LEFT = 37
const RIGHT = 39
const ESC = 27
const P = 80

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

  pressAndHold(ESC, keysDown, () => {
    game.reset()
  })

  pressOnce(P, keysDown, () => {
    game.mode = game.mode === 'pause' ? 'play' : 'pause'
  })

  if (38 in keysDown || 32 in keysDown) { // Player holding up
    player.jump(game)
  }

  pressAndHold(LEFT, keysDown, () => {
    player.goLeft()
  })

  pressAndHold(RIGHT, keysDown, () => {
    player.goRight()
  })

  function pressOnce (keyCode, keysDown, cb) {
    const lbl = keyCode + 'Pressed'
    if (keyCode in keysDown) {
      if (!keysDown[lbl]) {
        keysDown[lbl] = true
        cb()
      }
    } else {
      delete keysDown[lbl]
    }
  }

  function pressAndHold (keyCode, keysDown, cb) {
    if (keyCode in keysDown) {
      cb()
    }
  }
}
