const sum = require('../sum');

test('adds 87 + 46 to equal 133', () => {
  expect(sum(87, 46)).toBe(133);
});