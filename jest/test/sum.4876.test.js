const sum4876 = require('../sum4876.js');

test('adds 18 + 15 to equal 33 + offset 0.5687466295712692', () => {
  expect(sum4876(18, 15)).toBe(33 + 0.5687466295712692);
});