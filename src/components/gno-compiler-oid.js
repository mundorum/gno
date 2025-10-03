import { Oid, OidWeb } from '@mundorum/oid/oid.js'
import antlr4 from 'antlr4'
import GnoLexer from '/src/translator/GnoLexer.js'
import GnoParser from '/src/translator/GnoParser.js'

export class GnoCompilerOid extends OidWeb {
  handleCompile (topic, message) {
    const compiled = {error: True, message: 'No input provided'}
    if (message.value) {
      console.log(message.value)
      const chars = new antlr4.InputStream(message.value)
      const lexer = new GnoLexer(chars)
      const tokens = new antlr4.CommonTokenStream(lexer)
      const parser = new GnoParser(tokens)
      // const tree = parser.script()
      // console.log('=== parser tree')
      // console.log(tree.toStringTree(parser.ruleNames))
      compiled.error = parser._syntaxErrors > 0
      compiled.message = (parser._syntaxErrors > 0)
               ? `Parser error: ${parser._syntaxErrors} error(s) found`
               : 'Parsing successful'
      compiled.translated = parser.translated
    }
    return compiled
  }

}

Oid.component(
{
  id: 'oid:gno-compiler',
  element: 'gno-compiler-oid',
  provide: ['itf:compiler'],
  implementation: GnoCompilerOid
})
