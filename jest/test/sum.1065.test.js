const sum = require('../sum');

test('adds 11 + 46 to equal 57', () => {
  expect(sum(11, 46)).toBe(57);
});