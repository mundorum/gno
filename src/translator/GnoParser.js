// Generated from grammar/Gno.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import GnoListener from './GnoListener.js';
const serializedATN = [4,1,12,66,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,5,0,13,8,0,10,0,12,0,16,9,0,4,0,18,8,0,11,0,12,0,19,1,1,1,1,1,1,
1,1,1,2,1,2,4,2,28,8,2,11,2,12,2,29,1,2,1,2,5,2,34,8,2,10,2,12,2,37,9,2,
1,2,1,2,1,2,1,3,1,3,5,3,44,8,3,10,3,12,3,47,9,3,1,4,1,4,1,4,1,4,1,4,1,4,
1,4,4,4,56,8,4,11,4,12,4,57,1,4,3,4,61,8,4,1,4,1,4,1,4,1,4,0,0,5,0,2,4,6,
8,0,2,1,0,3,4,1,1,5,5,68,0,17,1,0,0,0,2,21,1,0,0,0,4,25,1,0,0,0,6,45,1,0,
0,0,8,48,1,0,0,0,10,14,3,2,1,0,11,13,5,5,0,0,12,11,1,0,0,0,13,16,1,0,0,0,
14,12,1,0,0,0,14,15,1,0,0,0,15,18,1,0,0,0,16,14,1,0,0,0,17,10,1,0,0,0,18,
19,1,0,0,0,19,17,1,0,0,0,19,20,1,0,0,0,20,1,1,0,0,0,21,22,6,1,-1,0,22,23,
3,4,2,0,23,24,3,6,3,0,24,3,1,0,0,0,25,27,5,2,0,0,26,28,7,0,0,0,27,26,1,0,
0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,31,1,0,0,0,31,35,5,1,0,
0,32,34,7,0,0,0,33,32,1,0,0,0,34,37,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,
36,38,1,0,0,0,37,35,1,0,0,0,38,39,7,1,0,0,39,40,6,2,-1,0,40,5,1,0,0,0,41,
44,3,8,4,0,42,44,5,5,0,0,43,41,1,0,0,0,43,42,1,0,0,0,44,47,1,0,0,0,45,43,
1,0,0,0,45,46,1,0,0,0,46,7,1,0,0,0,47,45,1,0,0,0,48,49,5,10,0,0,49,50,5,
6,0,0,50,51,5,1,0,0,51,52,5,7,0,0,52,53,5,8,0,0,53,60,5,11,0,0,54,56,5,3,
0,0,55,54,1,0,0,0,56,57,1,0,0,0,57,55,1,0,0,0,57,58,1,0,0,0,58,59,1,0,0,
0,59,61,5,12,0,0,60,55,1,0,0,0,60,61,1,0,0,0,61,62,1,0,0,0,62,63,5,9,0,0,
63,64,6,4,-1,0,64,9,1,0,0,0,8,14,19,29,35,43,45,57,60];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class GnoParser extends antlr4.Parser {

    static grammarFileName = "Gno.g4";
    static literalNames = [ null, null, null, "' '", "'\\t'", null, "'['", 
                            "']'", "'('", "')'", "'!'" ];
    static symbolicNames = [ null, "TITLE", "ATX_START", "SPACE", "TAB", 
                             "NEWLINE", "OPEN_BRACKET", "CLOSE_BRACKET", 
                             "OPEN_PAREN", "CLOSE_PAREN", "EXCLAMATION", 
                             "IMAGE_URL", "IMAGE_TITLE" ];
    static ruleNames = [ "script", "scene", "sceneHeader", "sceneContent", 
                         "image" ];

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
	        this.state = 17; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 10;
	            this.scene();
	            this.state = 14;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===5) {
	                this.state = 11;
	                this.match(GnoParser.NEWLINE);
	                this.state = 16;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 19; 
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

	            this.currentScene = {content: []}
	            this.translated.scenes.push(this.currentScene)
	          
	        this.state = 22;
	        this.sceneHeader();
	        this.state = 23;
	        this.sceneContent();
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
	        this.state = 25;
	        localctx._ATX_START = this.match(GnoParser.ATX_START);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3 || _la===4);
	        this.state = 31;
	        localctx._TITLE = this.match(GnoParser.TITLE);
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3 || _la===4) {
	            this.state = 32;
	            _la = this._input.LA(1);
	            if(!(_la===3 || _la===4)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 37;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 38;
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



	sceneContent() {
	    let localctx = new SceneContentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, GnoParser.RULE_sceneContent);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 43;
	                this._errHandler.sync(this);
	                switch(this._input.LA(1)) {
	                case 10:
	                    this.state = 41;
	                    this.image();
	                    break;
	                case 5:
	                    this.state = 42;
	                    this.match(GnoParser.NEWLINE);
	                    break;
	                default:
	                    throw new antlr4.error.NoViableAltException(this);
	                } 
	            }
	            this.state = 47;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

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



	image() {
	    let localctx = new ImageContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, GnoParser.RULE_image);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(GnoParser.EXCLAMATION);
	        this.state = 49;
	        this.match(GnoParser.OPEN_BRACKET);
	        this.state = 50;
	        localctx._TITLE = this.match(GnoParser.TITLE);
	        this.state = 51;
	        this.match(GnoParser.CLOSE_BRACKET);
	        this.state = 52;
	        this.match(GnoParser.OPEN_PAREN);
	        this.state = 53;
	        localctx._IMAGE_URL = this.match(GnoParser.IMAGE_URL);
	        this.state = 60;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 54;
	                this.match(GnoParser.SPACE);
	                this.state = 57; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===3);
	            this.state = 59;
	            localctx._IMAGE_TITLE = this.match(GnoParser.IMAGE_TITLE);
	        }

	        this.state = 62;
	        this.match(GnoParser.CLOSE_PAREN);

	            this.currentScene.content.push({
	              type: "image",
	              alt: (localctx._TITLE == null ? null : localctx._TITLE.text),
	              path: (localctx._IMAGE_URL == null ? null : localctx._IMAGE_URL.text),
	              title: localctx._IMAGE_TITLE ? (localctx._IMAGE_TITLE == null ? null : localctx._IMAGE_TITLE.text) : null
	            })
	          
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
GnoParser.OPEN_BRACKET = 6;
GnoParser.CLOSE_BRACKET = 7;
GnoParser.OPEN_PAREN = 8;
GnoParser.CLOSE_PAREN = 9;
GnoParser.EXCLAMATION = 10;
GnoParser.IMAGE_URL = 11;
GnoParser.IMAGE_TITLE = 12;

GnoParser.RULE_script = 0;
GnoParser.RULE_scene = 1;
GnoParser.RULE_sceneHeader = 2;
GnoParser.RULE_sceneContent = 3;
GnoParser.RULE_image = 4;

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

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GnoParser.NEWLINE);
	    } else {
	        return this.getToken(GnoParser.NEWLINE, i);
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

	sceneContent() {
	    return this.getTypedRuleContext(SceneContentContext,0);
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



class SceneContentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GnoParser.RULE_sceneContent;
    }

	image = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImageContext);
	    } else {
	        return this.getTypedRuleContext(ImageContext,i);
	    }
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(GnoParser.NEWLINE);
	    } else {
	        return this.getToken(GnoParser.NEWLINE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.enterSceneContent(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.exitSceneContent(this);
		}
	}


}



class ImageContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = GnoParser.RULE_image;
        this._TITLE = null;
        this._IMAGE_URL = null;
        this._IMAGE_TITLE = null;
    }

	EXCLAMATION() {
	    return this.getToken(GnoParser.EXCLAMATION, 0);
	};

	OPEN_BRACKET() {
	    return this.getToken(GnoParser.OPEN_BRACKET, 0);
	};

	TITLE() {
	    return this.getToken(GnoParser.TITLE, 0);
	};

	CLOSE_BRACKET() {
	    return this.getToken(GnoParser.CLOSE_BRACKET, 0);
	};

	OPEN_PAREN() {
	    return this.getToken(GnoParser.OPEN_PAREN, 0);
	};

	IMAGE_URL() {
	    return this.getToken(GnoParser.IMAGE_URL, 0);
	};

	CLOSE_PAREN() {
	    return this.getToken(GnoParser.CLOSE_PAREN, 0);
	};

	IMAGE_TITLE() {
	    return this.getToken(GnoParser.IMAGE_TITLE, 0);
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


	enterRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.enterImage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof GnoListener ) {
	        listener.exitImage(this);
		}
	}


}




GnoParser.ScriptContext = ScriptContext; 
GnoParser.SceneContext = SceneContext; 
GnoParser.SceneHeaderContext = SceneHeaderContext; 
GnoParser.SceneContentContext = SceneContentContext; 
GnoParser.ImageContext = ImageContext; 
