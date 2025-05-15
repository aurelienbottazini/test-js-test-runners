const sum = require('../sum');

test('adds 46 + 99 to equal 145', () => {
  expect(sum(46, 99)).toBe(145);
});