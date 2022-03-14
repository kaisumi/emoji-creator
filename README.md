# emoji-creator
Creates custom emoji from text.
## Installation
```
npm install emoji-creator
```

## Usage
Put the code below somewhere in your HTML file.
```html
<script type="module">
  import generator from './node_modules/emoji-creator/index.js'
  generator()
</script>
```
Insert a 128x128 canvas along with an input area with id "emoji_input" for basic use.
```html
<canvas id="canvas" width="128" height="128">

<input id="emoji_input" type="text" />
```
For downloading feature, button and link with ids "emoji_download_button" and "emoji_download_link" must be used together to make available on various platforms.
```html
 <button id="emoji_download_button">Download</button>
<a id="emoji_download_link"></a>
```
Output data can be displayed using a texarea with id "emoji_data_url".
```html
<textarea id="emoji_data_url"></textarea>
```

### Sample
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Emoji Creator</title>
    <meta charset="utf-8"/>
    <style>
      canvas {
        border: 1px solid black;
      }
      textarea {
        width:100%;
        height:200px;
      }
    </style>
    <script type="module">
      import generator from './node_modules/emoji-creator/index.js'
      generator()
    </script>
  </head>
  <body>
    <div class="container">
      <div class="wrap">
        <div>Input a word starting with a colon, such as: <code>:Like</code></div>
        <!--Input area-->
        <input id="emoji_input" type="text" />
      </div>
    </div>
    <!--Canvas-->
    <canvas id="canvas" width="128" height="128"></canvas>
    <br />
    <!--Button and link for download-->
    <button id="emoji_download_button">Download</button>
    <a id="emoji_download_link"></a>
    <br />
    <!--Display output data-->
    <textarea id="emoji_data_url"></textarea>
  </body>
</html>

```
