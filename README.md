Firefox dotjs2 addon
====================

Overview
--------

In Opera browser there was (is?) cool feature: userscripts (http://www.opera.com/docs/userjs/) from local disk.
In Firefox this function was applied in https://github.com/rlr/dotjs-addon
But new WebExtensions API close direct way to do it.
 
It is attempt to force FF to use local .js on a favorite sites.
Based on dotjs plugin.
Now it works with dirty hacks, on Windows.
~"jQuery everywhere" included (via CDN now).~

Disadvantages are:
- more complex installation
- need to edit user.js when new <site>.js created
- not so convenient default path for <site>.js files
 
Tested on FF Quantum 58.0.2 x64 Win7.

Installation
------------

1. Edit user.js. Put to your FF profile dir
2. Restart FF
3. Put your default.js and other .js files to C:\\js\\ dir
4. Install .xpi addon
5. Open console (F12) and check if it works
