'use strict';

const browsers = [
  '> 5%',
  'last 2 Edge versions',
  'last 2 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
];

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  browsers.push('ie 11');
}

module.exports = {
  browsers
};
