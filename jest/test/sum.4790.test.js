const sum4790 = require('../sum4790.js');

test('adds 58 + 71 to equal 129 + offset 0.5883110409568353', () => {
  expect(sum4790(58, 71)).toBe(129 + 0.5883110409568353);
});