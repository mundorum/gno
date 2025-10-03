lexer grammar GnoLexer;

TITLE: [a-zA-Z_][a-zA-Z_0-9 ]+ ;

ATX_START: ( '######' | '#####' | '####' | '###' | '##' | '#' );

SPACE: ' ';
TAB: '\t';
NEWLINE: '\r'? '\n' | '\r' {setCharPositionInLine(0)};
OPEN_BRACKET: '[';
CLOSE_BRACKET: ']';
OPEN_PAREN: '(';
CLOSE_PAREN: ')';
EXCLAMATION: '!';

IMAGE_URL: (('http' | 'https') '://')? [a-zA-Z0-9._-]+ ( '/' [a-zA-Z0-9._-]+ )* ;
IMAGE_TITLE: '"' [^"]* '"' | '\'' [^']* '\'';
