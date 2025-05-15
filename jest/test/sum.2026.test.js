const sum = require('../sum');

test('adds 43 + 61 to equal 104', () => {
  expect(sum(43, 61)).toBe(104);
});