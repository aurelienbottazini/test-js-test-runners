const sum945 = require('../sum945.js');

test('adds 68 + 96 to equal 164 + offset 0.8701640992393485', () => {
  expect(sum945(68, 96)).toBe(164 + 0.8701640992393485);
});