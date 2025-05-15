const sum3935 = require('../sum3935.js');

test('adds 32 + 4 to equal 36 + offset 0.36270046428819924', () => {
  expect(sum3935(32, 4)).toBe(36 + 0.36270046428819924);
});