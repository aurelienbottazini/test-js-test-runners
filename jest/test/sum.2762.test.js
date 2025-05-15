const sum = require('../sum');

test('adds 17 + 28 to equal 45', () => {
  expect(sum(17, 28)).toBe(45);
});