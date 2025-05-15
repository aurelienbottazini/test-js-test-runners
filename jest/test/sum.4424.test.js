const sum = require('../sum');

test('adds 45 + 28 to equal 73', () => {
  expect(sum(45, 28)).toBe(73);
});