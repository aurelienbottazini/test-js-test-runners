const sum3441 = require('../sum3441.js');

test('adds 69 + 96 to equal 165 + 0.27318167860985054', () => {
  expect(sum3441(69, 96)).toBe(165 + 0.27318167860985054);
});