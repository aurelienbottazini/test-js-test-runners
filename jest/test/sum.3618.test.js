const sum3618 = require('../sum3618.js');

test('adds 38 + 87 to equal 125 + 0.32278727677559005', () => {
  expect(sum3618(38, 87)).toBe(125 + 0.32278727677559005);
});