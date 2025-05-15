const sum = require('../sum');

test('adds 54 + 20 to equal 74', () => {
  expect(sum(54, 20)).toBe(74);
});