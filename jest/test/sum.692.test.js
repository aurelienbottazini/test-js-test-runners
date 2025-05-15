const sum692 = require('../sum692.js');

test('adds 26 + 20 to equal 46 + offset 0.6690612867700668', () => {
  expect(sum692(26, 20)).toBe(46 + 0.6690612867700668);
});