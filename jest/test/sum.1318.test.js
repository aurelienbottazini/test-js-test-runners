const sum = require('../sum');

test('adds 79 + 25 to equal 104', () => {
  expect(sum(79, 25)).toBe(104);
});