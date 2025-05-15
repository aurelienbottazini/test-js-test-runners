const sum4287 = require('../sum4287.js');

test('adds 85 + 84 to equal 169 + offset 0.4139352345253222', () => {
  expect(sum4287(85, 84)).toBe(169 + 0.4139352345253222);
});