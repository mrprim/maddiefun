const defaultSprite1 = new Image()
defaultSprite1.src = 'assets/sprites/Player/player_default_0.png'

const defaultSprite2 = new Image()
defaultSprite2.src = 'assets/sprites/Player/player_default_1.png'

export default function * (player) {
  var d = defaultAnimation()

  while (true) {
    if (player.speedV > 0) {
      yield defaultSprite2
    } else {
      yield d.next().value
    }
  }
}

function * defaultAnimation () {
  while (true) {
    let clock = 0
    while (clock < 30) {
      yield defaultSprite1
      clock++
    }
    while (clock < 60) {
      yield defaultSprite2
      clock++
    }
    clock = 0
  }
}
