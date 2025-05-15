const sum = require('../sum');

test('adds 67 + 37 to equal 104', () => {
  expect(sum(67, 37)).toBe(104);
});