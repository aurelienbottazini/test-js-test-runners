const sum = require('../sum');

test('adds 81 + 94 to equal 175', () => {
  expect(sum(81, 94)).toBe(175);
});