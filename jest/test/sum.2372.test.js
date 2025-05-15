const sum = require('../sum');

test('adds 69 + 35 to equal 104', () => {
  expect(sum(69, 35)).toBe(104);
});