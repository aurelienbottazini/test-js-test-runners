const sum4055 = require('../sum4055.js');

test('adds 37 + 30 to equal 67 + offset 0.3517792782256327', () => {
  expect(sum4055(37, 30)).toBe(67 + 0.3517792782256327);
});