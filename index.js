export default ({ inputId = 'emoji_input', downloadButton = 'emoji_download_button', downloadLink = 'emoji_download_link', dataUrl = 'emoji_data_url'} ) => {
  const events = ['input', 'keyup']
  const input = document.querySelector(`#${inputId}`)
  const button = document.getElementById(downloadButton)
  const canvas = document.getElementById('canvas')
  let filename = 'img.png'

  function onClickDownload(downloadLink) {
    let downloadLink = document.getElementById(downloadLink)
    if (canvas.msToBlob) {
        let blob = canvas.msToBlob()
        window.navigator.msSaveBlob(blob, filename)
    } else {
        downloadLink.href = canvas.toDataURL('image/png')
        downloadLink.download = filename
        downloadLink.click()
    }
  }

  function showDataURL() {
    let div_element = document.getElementById(dataUrl)
    return div_element.textContent = canvas.toDataURL()
  }

  function draw(text) {
    filename = `${text}.png`
    if (!canvas.getContext) return

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
    showDataURL()
  }

  const onInput = (event) => {
    const { value } = event.target
    const lastWord = value.substring(value.lastIndexOf(' ') + 1, value.length)
    const match = /:[a-zA-Z0-9ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]/
    const text = lastWord.match(match)
    if (text) draw(lastWord.replace(':', ''))
  }
  events.map((event) => input.addEventListener(event, onInput))
  button.addEventListener('click', onClickDownload(downloadLink))
}

// テスト
