const sum = require('../sum');

test('adds 16 + 4 to equal 20', () => {
  expect(sum(16, 4)).toBe(20);
});