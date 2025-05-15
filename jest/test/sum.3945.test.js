const sum3945 = require('../sum3945.js');

test('adds 97 + 32 to equal 129 + offset 0.6535637451278015', () => {
  expect(sum3945(97, 32)).toBe(129 + 0.6535637451278015);
});