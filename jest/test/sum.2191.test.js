const sum = require('../sum');

test('adds 66 + 8 to equal 74', () => {
  expect(sum(66, 8)).toBe(74);
});