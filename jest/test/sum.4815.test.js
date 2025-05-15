const sum4815 = require('../sum4815.js');

test('adds 16 + 30 to equal 46 + 0.07577436746037247', () => {
  expect(sum4815(16, 30)).toBe(46 + 0.07577436746037247);
});