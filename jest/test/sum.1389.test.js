const sum = require('../sum');

test('adds 19 + 47 to equal 66', () => {
  expect(sum(19, 47)).toBe(66);
});