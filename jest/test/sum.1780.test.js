const sum = require('../sum');

test('adds 33 + 29 to equal 62', () => {
  expect(sum(33, 29)).toBe(62);
});