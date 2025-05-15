const sum3882 = require('../sum3882.js');

test('adds 40 + 17 to equal 57 + offset 0.2520018147333881', () => {
  expect(sum3882(40, 17)).toBe(57 + 0.2520018147333881);
});