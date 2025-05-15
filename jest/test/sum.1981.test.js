const sum1981 = require('../sum1981.js');

test('adds 74 + 90 to equal 164 + offset 0.5775019879936301', () => {
  expect(sum1981(74, 90)).toBe(164 + 0.5775019879936301);
});