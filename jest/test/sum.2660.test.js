const sum2660 = require('../sum2660.js');

test('adds 40 + 68 to equal 108 + 0.8780526105073934', () => {
  expect(sum2660(40, 68)).toBe(108 + 0.8780526105073934);
});