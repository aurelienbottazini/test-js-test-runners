const sum = require('../sum');

test('adds 33 + 41 to equal 74', () => {
  expect(sum(33, 41)).toBe(74);
});