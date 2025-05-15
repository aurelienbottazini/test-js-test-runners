const sum390 = require('../sum390.js');

test('adds 9 + 49 to equal 58 + offset 0.8089357212643392', () => {
  expect(sum390(9, 49)).toBe(58 + 0.8089357212643392);
});