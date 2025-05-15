const sum4971 = require('../sum4971.js');

test('adds 98 + 69 to equal 167 + offset 0.5267938149510931', () => {
  expect(sum4971(98, 69)).toBe(167 + 0.5267938149510931);
});