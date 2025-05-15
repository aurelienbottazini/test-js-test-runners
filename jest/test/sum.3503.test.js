const sum3503 = require('../sum3503.js');

test('adds 72 + 96 to equal 168 + 0.8152517822275502', () => {
  expect(sum3503(72, 96)).toBe(168 + 0.8152517822275502);
});