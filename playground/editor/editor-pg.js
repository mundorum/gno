import { Oid, Sphere, Bus } from '/lib/oidlib-dev.js'
import antlr4 from 'antlr4'
import GnoLexer from '/translator/GnoLexer.js'
import GnoParser from '/translator/GnoParser.js'

export class EditorPg {
  start () {
    this._controlSphere = Sphere.get('control').bus
    this._controlSphere.subscribe(
      'control/translate', this._translate.bind(this))
  }

  _translate (topic, message) {
    const input = document.querySelector("#pg-editor").value
    console.log(`input [${input}]`)
    const chars = new antlr4.InputStream(input)
    const lexer = new GnoLexer(chars)
    const tokens = new antlr4.CommonTokenStream(lexer)
    const parser = new GnoParser(tokens)
    const tree = parser.script()

    console.log('=== parser tree')
    console.log(tree.toStringTree(parser.ruleNames))
 
    document.querySelector("#pg-render").value =
      JSON.stringify(parser.translated, null, 2)
  }

}

EditorPg.i = new EditorPg()
