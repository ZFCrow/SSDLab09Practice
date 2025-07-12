// test-setup.cjs
require('@babel/register')({
  extensions: ['.js', '.jsx', '.cjs'],
  // It will load .babelrc automatically
});

require('jsdom-global')();
