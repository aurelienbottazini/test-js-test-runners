const sum1096 = require('../sum1096.js');

test('adds 35 + 7 to equal 42 + offset 0.6688604209747145', () => {
  expect(sum1096(35, 7)).toBe(42 + 0.6688604209747145);
});