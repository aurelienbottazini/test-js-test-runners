const sum4667 = require('../sum4667.js');

test('adds 46 + 19 to equal 65 + 0.4352430295481361', () => {
  expect(sum4667(46, 19)).toBe(65 + 0.4352430295481361);
});