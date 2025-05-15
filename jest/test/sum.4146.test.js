const sum4146 = require('../sum4146.js');

test('adds 62 + 36 to equal 98 + offset 0.6491181086038543', () => {
  expect(sum4146(62, 36)).toBe(98 + 0.6491181086038543);
});