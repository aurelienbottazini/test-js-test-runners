const sum405 = require('../sum405.js');

test('adds 7 + 30 to equal 37 + offset 0.2329623837638506', () => {
  expect(sum405(7, 30)).toBe(37 + 0.2329623837638506);
});