const sum = require('../sum');

test('adds 8 + 66 to equal 74', () => {
  expect(sum(8, 66)).toBe(74);
});