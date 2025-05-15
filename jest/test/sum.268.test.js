const sum268 = require('../sum268.js');

test('adds 77 + 8 to equal 85 + offset 0.917090322957938', () => {
  expect(sum268(77, 8)).toBe(85 + 0.917090322957938);
});