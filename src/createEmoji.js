export default (className) => {
  const events = ['input', 'keyup']
  const input = document.querySelector(className)

  function draw(text) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = document.getElementById('canvas').getContext('2d');
      const width_rate = 1 / text.length
      ctx.setTransform(width_rate,0,0,1,0,0)
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, 128 / width_rate, 128)
      ctx.fillStyle = 'black'
      ctx.font = "bold 128px ゴシック";
      ctx.fillText(text, 0, 115)
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