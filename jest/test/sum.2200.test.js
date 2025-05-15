const sum2200 = require('../sum2200.js');

test('adds 26 + 36 to equal 62 + offset 0.1581666728853901', () => {
  expect(sum2200(26, 36)).toBe(62 + 0.1581666728853901);
});