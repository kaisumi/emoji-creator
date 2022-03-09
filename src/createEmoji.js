export default () => {
  const events = ['input', 'keyup']
  const input = document.querySelector('#emoji_input')
  const button = document.getElementById('emoji_download_button')
  const canvas = document.getElementById('canvas')
  let filename = 'img.png'

  function onClickDownload() {
    let downloadLink = document.getElementById('emoji_download_link')
    if (canvas.msToBlob) {
        let blob = canvas.msToBlob()
        window.navigator.msSaveBlob(blob, filename)
    } else {
        downloadLink.href = canvas.toDataURL('image/png')
        downloadLink.download = filename
        downloadLink.click()
    }
  }

  function draw(text) {
    filename = `${text}.png`
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d')
      ctx.font = `bold ${canvas.height}px ゴシック`
      const metrics = ctx.measureText(text)
      const width_rate = canvas.width / metrics.width
      const height = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
      const height_rate = canvas.height / height
      ctx.setTransform(width_rate,0,0,height_rate,0,0)
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, metrics.width, height)
      ctx.fillStyle = 'black'
      ctx.fillText(text, 0, metrics.actualBoundingBoxAscent)
    }
    return
  }

  const onInput = (event) => {
    const { value } = event.target
    const lastWord = value.substring(value.lastIndexOf(' ') + 1, value.length)
    const match = /:[a-zA-Z0-9ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/
    const text = lastWord.match(match)
    if (text) draw(lastWord.replace(':', ''))
    return
  }
  events.map((event) => input.addEventListener(event, onInput))
  button.addEventListener('click', onClickDownload)
}