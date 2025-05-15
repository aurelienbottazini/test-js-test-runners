const sum4580 = require('../sum4580.js');

test('adds 23 + 50 to equal 73 + offset 0.22992104559542914', () => {
  expect(sum4580(23, 50)).toBe(73 + 0.22992104559542914);
});