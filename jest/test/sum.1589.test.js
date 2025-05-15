const sum1589 = require('../sum1589.js');

test('adds 86 + 94 to equal 180 + 0.5602784919143713', () => {
  expect(sum1589(86, 94)).toBe(180 + 0.5602784919143713);
});