const sum = require('../sum');

test('adds 62 + 46 to equal 108', () => {
  expect(sum(62, 46)).toBe(108);
});