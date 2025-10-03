# gnō-

## ANTLR

### Installing the Tool

~~~
pip install antlr4-tools
~~~

### Generating the Parser in JavaScript

~~~
antlr4 -Dlanguage=JavaScript -o translator -Xexact-output-dir grammar/GnoLexer.g4 grammar/Gno.g4
~~~

## Preparing the Environment

The most productive way I found to have the last Oid libraries updated is to clone the mundorum library  repository. Inside a directory `/home/user/git/` clone it:

~~~
git clone https://github.com/mundorum/library.git
~~~

### -o-id Adopter

If you are only using the -o-id library without modifying it, you can install it:
~~~bash
npm install @mundorum/oid
~~~

### Collections Adopter

If you are only using the collections without modifying them, you can install them:
~~~bash
npm install @mundorum/collections
~~~

### -o-id / collections Developer

If you are both an -o-id library developer and a collection developer, suppose you are modifying the -o-id library and you want your modifications to reflect in your collection automatically. In that case, you can emulate also the -o-id library installation as a node module straight from the `dist` of the -o-id library.

There are two steps to link local Mundorum libraries in the development mode.

Inside `/dist` directory of the -o-id library (e.g., `/git/mundorum/oid/dist`):
~~~bash
npm link
~~~

Inside `/node_modules/` directory of you collections project:
~~~bash
npm link @mundorum/oid @mundorum/collections
~~~

Notice that here you must specify both `@mundorum/oid` `@mundorum/collections`, since if you specify only `@mundorum/oid` it will disregard the previous `@mundorum/collections` link.

This procedure mimics the -o-id library installed in the npm straight from `/git/mundorum/oid/dist`.
