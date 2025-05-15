const sum486 = require('../sum486.js');

test('adds 8 + 57 to equal 65 + offset 0.23130187137744995', () => {
  expect(sum486(8, 57)).toBe(65 + 0.23130187137744995);
});