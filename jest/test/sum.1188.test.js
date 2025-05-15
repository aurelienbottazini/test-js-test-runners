const sum1188 = require('../sum1188.js');

test('adds 97 + 46 to equal 143 + 0.9214710476297405', () => {
  expect(sum1188(97, 46)).toBe(143 + 0.9214710476297405);
});