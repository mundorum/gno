# Preparing the Environment

The most productive way I found to have the last Oid libraries updated is to clone the Oid repositories. 

## Mapping Foundation

Inside a directory `/home/user/git/` clone it:

~~~
git clone https://github.com/mundorum/oid.git
~~~

`/home/user/git/` is a hypothetical directory you must update to your machine.

Map the `foundation` folder in this directory to the `/lib/foundation` folder of the Oid repository:

~~~ 
ln -s /home/user/git/oid/lib/foundation/ foundation
~~~

## Mapping Graph

Considering that you cloned the Mundorum `graph` inside a directory `/home/user/git/`:

~~~
git clone https://github.com/mundorum/graph.git
~~~

`/home/user/git/` is a hypothetical directory you must update to your machine.

Map the `graph` folder in this directory to the lib folder of the Oid repository:

~~~
ln -s /home/user/git/graph/lib/graph/ graph
~~~
