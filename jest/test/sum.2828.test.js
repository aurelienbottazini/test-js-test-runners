const sum2828 = require('../sum2828.js');

test('adds 62 + 24 to equal 86 + offset 0.4180279724466891', () => {
  expect(sum2828(62, 24)).toBe(86 + 0.4180279724466891);
});