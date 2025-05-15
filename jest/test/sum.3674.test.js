const sum3674 = require('../sum3674.js');

test('adds 34 + 78 to equal 112 + 0.59866142649934', () => {
  expect(sum3674(34, 78)).toBe(112 + 0.59866142649934);
});