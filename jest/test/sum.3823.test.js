const sum3823 = require('../sum3823.js');

test('adds 85 + 30 to equal 115 + offset 0.8562610513942158', () => {
  expect(sum3823(85, 30)).toBe(115 + 0.8562610513942158);
});