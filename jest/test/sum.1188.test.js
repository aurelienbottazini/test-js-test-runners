const sum1188 = require('../sum1188.js');

test('adds 79 + 76 to equal 155 + offset 0.5262602043454773', () => {
  expect(sum1188(79, 76)).toBe(155 + 0.5262602043454773);
});