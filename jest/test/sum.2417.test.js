const sum2417 = require('../sum2417.js');

test('adds 78 + 76 to equal 154 + offset 0.3535632337316972', () => {
  expect(sum2417(78, 76)).toBe(154 + 0.3535632337316972);
});