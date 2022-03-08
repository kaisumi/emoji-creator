export default (className) => {
  const events = ['input', 'keyup']
  const input = document.querySelector(className)

  function draw(text) {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = document.getElementById('canvas').getContext('2d');
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, 300, 150)
      ctx.fillStyle = 'black'
      ctx.font = "48px serif";
      ctx.fillText(text, 10, 50);
      console.log(canvas.toDataURL())
    }
    return
  }

  const onInput = (event) => {
    const { value } = event.target
    const lastWord = value.substring(value.lastIndexOf(' ') + 1, value.length)
    const match = /:[a-z0-9ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/
    const text = lastWord.match(match)
    if (text) draw(lastWord)
    return
  }
  events.map((event) => input.addEventListener(event, onInput))
}