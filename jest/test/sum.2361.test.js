const sum2361 = require('../sum2361.js');

test('adds 81 + 84 to equal 165 + offset 0.16548945105164026', () => {
  expect(sum2361(81, 84)).toBe(165 + 0.16548945105164026);
});