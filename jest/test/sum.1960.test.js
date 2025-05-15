const sum = require('../sum');

test('adds 67 + 7 to equal 74', () => {
  expect(sum(67, 7)).toBe(74);
});