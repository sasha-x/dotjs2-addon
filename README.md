Firefox dotjs2 addon
====================

Overview
--------

In Opera browser there was (is?) cool feature: userscripts (http://www.opera.com/docs/userjs/) from local disk.
In Firefox this function was applied in https://github.com/rlr/dotjs-addon
But new WebExtensions API close direct way to do it.
 
It is attempt to force FF to use local .js on a favorite sites.
Based on dotjs plugin.

**Upd**

v.1 drafted.

Advantages:
- it works :o)
- simple installation
- no limitations of prev version
- https sites served ok
- "jquery everywhere" (via CDN) included

Disadvantages:
- extension expects your js available on `http://127.0.0.1:8000/<domain>.js`, so local web server app required

Tested on Linux Ubuntu 16.04 FF 59.0.2 x64.

Installation
------------

1. Set up local web server
 - your scripts dir (~/.js) as document root
 - js files should be seen on `http://127.0.0.1:8000/` address
 - now I use `nohup php -S localhost:8000 -t ~/.js > /dev/null 2>&1 &` shell command in my profile rc
 - no special https support required if we use `http://127.0.0.1` in URL
2. Put your .js files to ~/.js/ dir
 - default.js is for all sites
3. Install .xpi addon (Download with repo -> Nautilus: .xpi -> open with Firefox)
4. Open console (F12) and check if it works


TODO 
----

- android version.
- test on windows


