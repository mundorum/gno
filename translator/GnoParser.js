// Generated from grammar/Gno.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GnoListener from './GnoListener.js';
const serializedATN = [4,1,5,31,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,1,1,1,1,1,2,1,2,4,2,17,8,2,11,2,12,2,18,1,2,1,2,5,2,23,8,2,
10,2,12,2,26,9,2,1,2,1,2,1,2,1,2,0,0,3,0,2,4,0,2,1,0,3,4,1,1,5,5,30,0,7,
1,0,0,0,2,11,1,0,0,0,4,14,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,
7,1,0,0,0,9,10,1,0,0,0,10,1,1,0,0,0,11,12,6,1,-1,0,12,13,3,4,2,0,13,3,1,
0,0,0,14,16,5,2,0,0,15,17,7,0,0,0,16,15,1,0,0,0,17,18,1,0,0,0,18,16,1,0,
0,0,18,19,1,0,0,0,19,20,1,0,0,0,20,24,5,1,0,0,21,23,7,0,0,0,22,21,1,0,0,
0,23,26,1,0,0,0,24,22,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,24,1,0,0,0,
27,28,7,1,0,0,28,29,6,2,-1,0,29,5,1,0,0,0,3,9,18,24];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GnoParser extends antlr4.Parser {

    static grammarFileName = "Gno.g4";
    static literalNames = [ null, null, null, "' '", "'\\t'" ];
    static symbolicNames = [ null, "TITLE", "ATX_START", "SPACE", "TAB", 
                             "NEWLINE" ];
    static ruleNames = [ "script", "scene", "sceneHeader" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = GnoParser.ruleNames;
        this.literalNames = GnoParser.literalNames;
        this.symbolicNames = GnoParser.symbolicNames;

          this.translated = {
            scenes: []
          }
          this.currentScene = null;

    }



	script() {
	    let localctx = new ScriptContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, GnoParser.RULE_script);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.scene();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scene() {
	    let localctx = new SceneContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, GnoParser.RULE_scene);
	    try {
	        this.enterOuterAlt(localctx, 1);

	            this.currentScene = {}
	            this.translated.scenes.push(this.currentScene)
	          
	        this.state = 12;
	        this.sceneHeader();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sceneHeader() {
	    let localctx = new SceneHeaderContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, GnoParser.RULE_sceneHeader);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 14;
	        localctx._ATX_START = this.match(GnoParser.ATX_START);
	        this.state = 16; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 15;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 18; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
	        this.state = 20;
	        localctx._TITLE = this.match(GnoParser.TITLE);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 21;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 26;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 27;
	        _la = this._input.LA(1);
	        if(!(_la===-1 || _la===5)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }

	            this.currentScene.level = (localctx._ATX_START == null ? null : localctx._ATX_START.text).length
	            this.currentScene.title = (localctx._TITLE == null ? null : localctx._TITLE.text)
	          
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

GnoParser.EOF = antlr4.Token.EOF;
GnoParser.TITLE = 1;
GnoParser.ATX_START = 2;
GnoParser.SPACE = 3;
GnoParser.TAB = 4;
GnoParser.NEWLINE = 5;

GnoParser.RULE_script = 0;
GnoParser.RULE_scene = 1;
GnoParser.RULE_sceneHeader = 2;

class ScriptContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GnoParser.RULE_script;
    }

	scene = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SceneContext);
	    } else {
	        return this.getTypedRuleContext(SceneContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.enterScript(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.exitScript(this);
		}
	}


}



class SceneContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GnoParser.RULE_scene;
    }

	sceneHeader() {
	    return this.getTypedRuleContext(SceneHeaderContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.enterScene(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.exitScene(this);
		}
	}


}



class SceneHeaderContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GnoParser.RULE_sceneHeader;
        this._ATX_START = null;
        this._TITLE = null;
    }

	ATX_START() {
	    return this.getToken(GnoParser.ATX_START, 0);
	};

	TITLE() {
	    return this.getToken(GnoParser.TITLE, 0);
	};

	NEWLINE() {
	    return this.getToken(GnoParser.NEWLINE, 0);
	};

	EOF() {
	    return this.getToken(GnoParser.EOF, 0);
	};

	SPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GnoParser.SPACE);
	    } else {
	        return this.getToken(GnoParser.SPACE, i);
	    }
	};


	TAB = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GnoParser.TAB);
	    } else {
	        return this.getToken(GnoParser.TAB, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.enterSceneHeader(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.exitSceneHeader(this);
		}
	}


}




GnoParser.ScriptContext = ScriptContext; 
GnoParser.SceneContext = SceneContext; 
GnoParser.SceneHeaderContext = SceneHeaderContext; 
