const sum1061 = require('../sum1061.js');

test('adds 53 + 27 to equal 80 + offset 0.8710634791513205', () => {
  expect(sum1061(53, 27)).toBe(80 + 0.8710634791513205);
});