# couchDB-demo
Learn how to use Apach CouchDB, UI is developed with ReactJS

To install React DOM and build your bundle with browserify:

$ npm install -g browserify
$ npm install --save react react-dom react-router react-bootstrap react-router-bootstrap babelify babel-preset-react babel-preset-es2015
$ browserify -t [ babelify ] scripts/index.js -o bundle.js

Note:
If you are using ES2015, you will want to also use the babel-preset-es2015 package.



Alternatives:

To install React DOM and build your bundle with webpack:

$ npm install --save react react-dom babel-preset-react babel-loader babel-core
$ webpack main.js bundle.js --module-bind 'js=babel-loader'

