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

`/home/user/git/` is a hypothetical directory you must update to your machine.

Map the `lib` folder in this directory to the root of the mundorum library repository:

~~ 
ln -s /home/user/git/library/ lib
~~~

ln -s /home/santanche/git/mundorum/library/ lib