const sum2512 = require('../sum2512.js');

test('adds 89 + 88 to equal 177 + offset 0.8367022066584346', () => {
  expect(sum2512(89, 88)).toBe(177 + 0.8367022066584346);
});