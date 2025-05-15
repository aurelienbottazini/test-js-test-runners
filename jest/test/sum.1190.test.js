const sum = require('../sum');

test('adds 65 + 36 to equal 101', () => {
  expect(sum(65, 36)).toBe(101);
});