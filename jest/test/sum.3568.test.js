const sum3568 = require('../sum3568.js');

test('adds 75 + 98 to equal 173 + offset 0.08909489762205858', () => {
  expect(sum3568(75, 98)).toBe(173 + 0.08909489762205858);
});