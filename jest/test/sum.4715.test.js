const sum4715 = require('../sum4715.js');

test('adds 94 + 66 to equal 160 + offset 0.12364164239937181', () => {
  expect(sum4715(94, 66)).toBe(160 + 0.12364164239937181);
});