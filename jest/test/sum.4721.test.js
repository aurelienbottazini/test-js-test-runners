const sum4721 = require('../sum4721.js');

test('adds 96 + 84 to equal 180 + offset 0.7298913710138469', () => {
  expect(sum4721(96, 84)).toBe(180 + 0.7298913710138469);
});