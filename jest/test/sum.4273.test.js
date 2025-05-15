const sum4273 = require('../sum4273.js');

test('adds 73 + 69 to equal 142 + 0.9993081047484126', () => {
  expect(sum4273(73, 69)).toBe(142 + 0.9993081047484126);
});