const sum = require('../sum');

test('adds 83 + 21 to equal 104', () => {
  expect(sum(83, 21)).toBe(104);
});