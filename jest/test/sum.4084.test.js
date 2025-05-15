const sum4084 = require('../sum4084.js');

test('adds 31 + 52 to equal 83 + offset 0.6345782837287416', () => {
  expect(sum4084(31, 52)).toBe(83 + 0.6345782837287416);
});