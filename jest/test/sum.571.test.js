const sum571 = require('../sum571.js');

test('adds 38 + 33 to equal 71 + 0.4785021912540569', () => {
  expect(sum571(38, 33)).toBe(71 + 0.4785021912540569);
});