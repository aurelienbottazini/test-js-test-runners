const sum2022 = require('../sum2022.js');

test('adds 54 + 70 to equal 124 + 0.6557969562881966', () => {
  expect(sum2022(54, 70)).toBe(124 + 0.6557969562881966);
});