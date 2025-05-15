const sum = require('../sum');

test('adds 16 + 96 to equal 112', () => {
  expect(sum(16, 96)).toBe(112);
});