const sum391 = require('../sum391.js');

test('adds 51 + 43 to equal 94 + offset 0.39996141741585056', () => {
  expect(sum391(51, 43)).toBe(94 + 0.39996141741585056);
});