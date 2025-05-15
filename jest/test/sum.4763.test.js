const sum4763 = require('../sum4763.js');

test('adds 32 + 99 to equal 131 + offset 0.8224541537758993', () => {
  expect(sum4763(32, 99)).toBe(131 + 0.8224541537758993);
});