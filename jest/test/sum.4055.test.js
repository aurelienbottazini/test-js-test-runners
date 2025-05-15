const sum4055 = require('../sum4055.js');

test('adds 48 + 18 to equal 66 + 0.6704263574675042', () => {
  expect(sum4055(48, 18)).toBe(66 + 0.6704263574675042);
});