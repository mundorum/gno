// Generated from grammar/GnoLexer.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,5,52,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,
7,4,1,0,1,0,4,0,14,8,0,11,0,12,0,15,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,39,8,1,1,2,1,2,1,3,1,
3,1,4,3,4,46,8,4,1,4,1,4,1,4,3,4,51,8,4,0,0,5,1,1,3,2,5,3,7,4,9,5,1,0,2,
3,0,65,90,95,95,97,122,5,0,32,32,48,57,65,90,95,95,97,122,59,0,1,1,0,0,0,
0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,1,11,1,0,0,0,3,38,1,0,0,
0,5,40,1,0,0,0,7,42,1,0,0,0,9,50,1,0,0,0,11,13,7,0,0,0,12,14,7,1,0,0,13,
12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,0,15,16,1,0,0,0,16,2,1,0,0,0,17,18,
5,35,0,0,18,19,5,35,0,0,19,20,5,35,0,0,20,21,5,35,0,0,21,22,5,35,0,0,22,
39,5,35,0,0,23,24,5,35,0,0,24,25,5,35,0,0,25,26,5,35,0,0,26,27,5,35,0,0,
27,39,5,35,0,0,28,29,5,35,0,0,29,30,5,35,0,0,30,31,5,35,0,0,31,39,5,35,0,
0,32,33,5,35,0,0,33,34,5,35,0,0,34,39,5,35,0,0,35,36,5,35,0,0,36,39,5,35,
0,0,37,39,5,35,0,0,38,17,1,0,0,0,38,23,1,0,0,0,38,28,1,0,0,0,38,32,1,0,0,
0,38,35,1,0,0,0,38,37,1,0,0,0,39,4,1,0,0,0,40,41,5,32,0,0,41,6,1,0,0,0,42,
43,5,9,0,0,43,8,1,0,0,0,44,46,5,13,0,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,
1,0,0,0,47,51,5,10,0,0,48,49,5,13,0,0,49,51,6,4,0,0,50,45,1,0,0,0,50,48,
1,0,0,0,51,10,1,0,0,0,5,0,15,38,45,50,1,1,4,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class GnoLexer extends antlr4.Lexer {

    static grammarFileName = "GnoLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "' '", "'\\t'" ];
	static symbolicNames = [ null, "TITLE", "ATX_START", "SPACE", "TAB", "NEWLINE" ];
	static ruleNames = [ "TITLE", "ATX_START", "SPACE", "TAB", "NEWLINE" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

GnoLexer.EOF = antlr4.Token.EOF;
GnoLexer.TITLE = 1;
GnoLexer.ATX_START = 2;
GnoLexer.SPACE = 3;
GnoLexer.TAB = 4;
GnoLexer.NEWLINE = 5;

GnoLexer.prototype.action = function(localctx, ruleIndex, actionIndex) {
	switch (ruleIndex) {
	case 4:
		this.NEWLINE_action(localctx, actionIndex);
		break;
	default:
		throw "No registered action for:" + ruleIndex;
	}
};


GnoLexer.prototype.NEWLINE_action = function(localctx , actionIndex) {
	switch (actionIndex) {
	case 0:
		setCharPositionInLine(0)
		break;
	default:
		throw "No registered action for:" + actionIndex;
	}
};



