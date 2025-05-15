const sum2458 = require('../sum2458.js');

test('adds 52 + 57 to equal 109 + offset 0.1455090272251769', () => {
  expect(sum2458(52, 57)).toBe(109 + 0.1455090272251769);
});