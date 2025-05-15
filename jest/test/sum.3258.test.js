const sum = require('../sum');

test('adds 75 + 36 to equal 111', () => {
  expect(sum(75, 36)).toBe(111);
});