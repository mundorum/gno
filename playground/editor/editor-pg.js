import { Oid, Sphere, Bus } from '@mundorum/oid/oid.js'
import antlr4 from 'antlr4'
import GnoLexer from '/src/translator/GnoLexer.js'
import GnoParser from '/src/translator/GnoParser.js'
import ejs from 'ejs'

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
    document.querySelector("#pg-final").innerHTML = this._generate(parser.translated)
    
    this._controlSphere.publish('control/monitor',
      { value: parser._syntaxErrors > 0
               ? `Parser error: ${parser._syntaxErrors} error(s) found`
               : 'Parsing successful'
      }
    )
  }

  _generate (json) {
const ejsTemplate = `
<% scenes.forEach(function(scene) { %>
  <div class="scene">
    <h<%= scene.level || 1 %> class="scene-title level-<%= scene.level || 1 %>"><%= scene.title %></h<%= scene.level || 1 %>>
    <% scene.content.forEach(function(item) { %>
      <% if (item.type === 'image') { %>
        <img src="<%= item.path %>" alt="<%= item.alt || '' %>" <% if (item.title) { %>title="<%= item.title %>"<% } %>>
      <% } %>
    <% }); %>
  </div>
<% }); %>`

    return ejs.render(ejsTemplate, json)
  } 

}

EditorPg.i = new EditorPg()
