const sum = require('../sum');

test('adds 73 + 27 to equal 100', () => {
  expect(sum(73, 27)).toBe(100);
});