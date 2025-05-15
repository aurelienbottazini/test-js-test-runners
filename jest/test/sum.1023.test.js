const sum1023 = require('../sum1023.js');

test('adds 43 + 14 to equal 57 + 0.5463676159735491', () => {
  expect(sum1023(43, 14)).toBe(57 + 0.5463676159735491);
});