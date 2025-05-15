const sum525 = require('../sum525.js');

test('adds 59 + 83 to equal 142 + 0.9729973921247812', () => {
  expect(sum525(59, 83)).toBe(142 + 0.9729973921247812);
});