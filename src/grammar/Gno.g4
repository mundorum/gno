grammar Gno;

options {
    tokenVocab=GnoLexer;
}

@members {
  this.translated = {
    scenes: []
  }
  this.currentScene = null;
}

script: (scene NEWLINE*)+ ;

scene:
  {
    this.currentScene = {content: []}
    this.translated.scenes.push(this.currentScene)
  }
  sceneHeader
  sceneContent
;

sceneHeader: ATX_START (SPACE | TAB)+ TITLE (SPACE | TAB)* (NEWLINE | EOF)
  {
    this.currentScene.level = $ATX_START.text.length
    this.currentScene.title = $TITLE.text
  }
;

sceneContent: (image | NEWLINE)* ;

image: EXCLAMATION OPEN_BRACKET TITLE CLOSE_BRACKET OPEN_PAREN IMAGE_URL (SPACE+ IMAGE_TITLE)? CLOSE_PAREN
  {
    this.currentScene.content.push({
      type: "image",
      alt: $TITLE.text,
      path: $IMAGE_URL.text,
      title: $IMAGE_TITLE ? $IMAGE_TITLE.text : null
    })
  }
;
