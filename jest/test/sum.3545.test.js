const sum3545 = require('../sum3545.js');

test('adds 60 + 82 to equal 142 + 0.4748451968585754', () => {
  expect(sum3545(60, 82)).toBe(142 + 0.4748451968585754);
});