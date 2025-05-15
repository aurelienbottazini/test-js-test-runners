const sum3179 = require('../sum3179.js');

test('adds 46 + 30 to equal 76 + 0.424512187242421', () => {
  expect(sum3179(46, 30)).toBe(76 + 0.424512187242421);
});