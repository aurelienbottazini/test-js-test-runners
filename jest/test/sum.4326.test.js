const sum4326 = require('../sum4326.js');

test('adds 22 + 58 to equal 80 + offset 0.5455690808249143', () => {
  expect(sum4326(22, 58)).toBe(80 + 0.5455690808249143);
});