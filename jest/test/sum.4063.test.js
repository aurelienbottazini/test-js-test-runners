const sum4063 = require('../sum4063.js');

test('adds 24 + 61 to equal 85 + 0.3722305285848868', () => {
  expect(sum4063(24, 61)).toBe(85 + 0.3722305285848868);
});