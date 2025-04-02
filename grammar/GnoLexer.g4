lexer grammar GnoLexer;

TITLE: [a-zA-Z_][a-zA-Z_0-9 ]+ ;

ATX_START: ( '######' | '#####' | '####' | '###' | '##' | '#' );

SPACE: ' ';
TAB: '\t';
NEWLINE: '\r'? '\n' | '\r' {setCharPositionInLine(0)};
