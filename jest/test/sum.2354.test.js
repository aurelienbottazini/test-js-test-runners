const sum2354 = require('../sum2354.js');

test('adds 34 + 13 to equal 47 + 0.3735025128459394', () => {
  expect(sum2354(34, 13)).toBe(47 + 0.3735025128459394);
});