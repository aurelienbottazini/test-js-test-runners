const sum993 = require('../sum993.js');

test('adds 37 + 46 to equal 83 + offset 0.9596519331452186', () => {
  expect(sum993(37, 46)).toBe(83 + 0.9596519331452186);
});