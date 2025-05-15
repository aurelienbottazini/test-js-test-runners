const sum2087 = require('../sum2087.js');

test('adds 15 + 24 to equal 39 + 0.9057339359711609', () => {
  expect(sum2087(15, 24)).toBe(39 + 0.9057339359711609);
});