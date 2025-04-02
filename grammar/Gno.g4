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

script: scene+ ;

scene:
  {
    this.currentScene = {}
    this.translated.scenes.push(this.currentScene)
  }
  sceneHeader
;

sceneHeader: ATX_START (SPACE | TAB)+ TITLE (SPACE | TAB)* (NEWLINE | EOF)
  {
    this.currentScene.level = $ATX_START.text.length
    this.currentScene.title = $TITLE.text
  }
;
