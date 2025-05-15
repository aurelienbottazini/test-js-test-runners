const sum3000 = require('../sum3000.js');

test('adds 32 + 17 to equal 49 + 0.13410739384966475', () => {
  expect(sum3000(32, 17)).toBe(49 + 0.13410739384966475);
});