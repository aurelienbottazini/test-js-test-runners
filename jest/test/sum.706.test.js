const sum = require('../sum');

test('adds 45 + 59 to equal 104', () => {
  expect(sum(45, 59)).toBe(104);
});