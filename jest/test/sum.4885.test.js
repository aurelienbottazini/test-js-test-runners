const sum4885 = require('../sum4885.js');

test('adds 7 + 5 to equal 12 + offset 0.39599486436761266', () => {
  expect(sum4885(7, 5)).toBe(12 + 0.39599486436761266);
});