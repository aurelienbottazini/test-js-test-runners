const sum = require('../sum');

test('adds 41 + 46 to equal 87', () => {
  expect(sum(41, 46)).toBe(87);
});