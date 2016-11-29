# T.E.A.L
The Extensible Adaptable Learning Framework

This is a pet project I've been wanting to work on for years. The idea is a learning management system focused around self-study.

I originally conceived of the idea as a way of managing how to read all the books I have. As I played around with it, I decided I wanted
to extend the concept to more than just library books to any kind of resource, ie. youtube videos, online classes, wikipedia articles, etc.
From a usage standpoint I want to try and combine the usability of Pinterest
with the spaced-learning system in Anki.

I'm also using this project as a learning platform for web development in general. It contains a tiny node.js instance for learning server-side code.

I should mention that this is a giant work-in-progress and will probably be
broken half the time.

~~My goal is to have a working beta of the system up by March.~~

UPDATE:

I know the readme file isn't a blog, but I feel like it's the easiest place to
put project updates.

I've been learning MVC from http://todomvc.com/ and it's been really helping me to understand modern development techniques. I'll be completely refactoring T.E.A.L to use MVC with a RESTful interface.


I'm still going to keep it in pure javascript for now since this is supposed to be a learning exercise to help me get a solid understanding of
Javascript and modern web design. Depending on how it goes I will make decisions about adding jQuery, Bootstrap, React or other frameworks as I gain more understanding and feel the project outgrowing what pure JS can readily do.

UPDATE:

It's been a minute since the last project update. I've finished the conversion to an MVC-style
design in pure JS. The controller and model functions are more generalized. Now that I've gotten
it to this level of abstraction, further abstraction methods are a lot easier to see. The next step is to work on the underlying data model. DOM manipulation is working fine for building skeleton structures of the UI. This will go through several iterations before it starts to match the initial
"tree-structure" idea. The next step after a real, working prototype is in place will be to look at
introducing a proper REST interface.

Please visit the wiki page as well to see the evolution of the design.
