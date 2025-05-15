const sum = require('../sum');

test('adds 46 + 63 to equal 109', () => {
  expect(sum(46, 63)).toBe(109);
});