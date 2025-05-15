const sum3993 = require('../sum3993.js');

test('adds 0 + 18 to equal 18 + 0.8569091509934381', () => {
  expect(sum3993(0, 18)).toBe(18 + 0.8569091509934381);
});