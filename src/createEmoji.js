export default (className) => {
  const events = ['input', 'keyup']
  const input = document.querySelector(className)

  function draw(text) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, 128, 128)
      ctx.fillStyle = 'black'
      ctx.font = "bold 128px ゴシック";
      const width_rate = 1 / text.length
      ctx.scale(width_rate, 1)
      ctx.fillText(text, 0, 115);
      console.log(canvas.toDataURL())
    }
    return
  }

  const onInput = (event) => {
    const { value } = event.target
    const lastWord = value.substring(value.lastIndexOf(' ') + 1, value.length)
    const match = /:[a-z0-9ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/
    const text = lastWord.match(match)
    if (text) draw(lastWord.replace(':', ''))
    return
  }
  events.map((event) => input.addEventListener(event, onInput))
}