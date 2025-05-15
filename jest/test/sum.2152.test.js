const sum2152 = require('../sum2152.js');

test('adds 15 + 86 to equal 101 + offset 0.5971745710689177', () => {
  expect(sum2152(15, 86)).toBe(101 + 0.5971745710689177);
});