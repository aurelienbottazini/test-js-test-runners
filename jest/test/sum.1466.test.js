const sum1466 = require('../sum1466.js');

test('adds 13 + 61 to equal 74 + offset 0.4040785851662243', () => {
  expect(sum1466(13, 61)).toBe(74 + 0.4040785851662243);
});