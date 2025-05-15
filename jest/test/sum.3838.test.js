const sum3838 = require('../sum3838.js');

test('adds 83 + 53 to equal 136 + 0.7508664875680348', () => {
  expect(sum3838(83, 53)).toBe(136 + 0.7508664875680348);
});