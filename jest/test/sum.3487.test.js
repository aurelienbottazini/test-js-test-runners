const sum3487 = require('../sum3487.js');

test('adds 42 + 60 to equal 102 + offset 0.801131275824049', () => {
  expect(sum3487(42, 60)).toBe(102 + 0.801131275824049);
});