const sum4263 = require('../sum4263.js');

test('adds 26 + 61 to equal 87 + 0.7709261315185347', () => {
  expect(sum4263(26, 61)).toBe(87 + 0.7709261315185347);
});