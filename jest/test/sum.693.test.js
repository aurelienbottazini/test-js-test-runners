const sum693 = require('../sum693.js');

test('adds 26 + 94 to equal 120 + 0.8272288294308912', () => {
  expect(sum693(26, 94)).toBe(120 + 0.8272288294308912);
});