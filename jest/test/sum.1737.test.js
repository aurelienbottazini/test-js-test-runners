const sum1737 = require('../sum1737.js');

test('adds 5 + 13 to equal 18 + offset 0.06164337745769777', () => {
  expect(sum1737(5, 13)).toBe(18 + 0.06164337745769777);
});