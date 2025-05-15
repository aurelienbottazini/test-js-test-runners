const sum2893 = require('../sum2893.js');

test('adds 25 + 99 to equal 124 + offset 0.8351531523640087', () => {
  expect(sum2893(25, 99)).toBe(124 + 0.8351531523640087);
});