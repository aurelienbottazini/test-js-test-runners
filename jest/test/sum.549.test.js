const sum = require('../sum');

test('adds 2 + 46 to equal 48', () => {
  expect(sum(2, 46)).toBe(48);
});