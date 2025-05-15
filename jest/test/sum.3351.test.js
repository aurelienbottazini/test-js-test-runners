const sum = require('../sum');

test('adds 45 + 29 to equal 74', () => {
  expect(sum(45, 29)).toBe(74);
});