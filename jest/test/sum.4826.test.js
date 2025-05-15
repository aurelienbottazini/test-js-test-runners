const sum4826 = require('../sum4826.js');

test('adds 48 + 25 to equal 73 + 0.39404527521416477', () => {
  expect(sum4826(48, 25)).toBe(73 + 0.39404527521416477);
});