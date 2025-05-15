const sum = require('../sum');

test('adds 45 + 67 to equal 112', () => {
  expect(sum(45, 67)).toBe(112);
});