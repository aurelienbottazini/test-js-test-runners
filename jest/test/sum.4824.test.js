const sum4824 = require('../sum4824.js');

test('adds 88 + 34 to equal 122 + 0.6090321762593663', () => {
  expect(sum4824(88, 34)).toBe(122 + 0.6090321762593663);
});