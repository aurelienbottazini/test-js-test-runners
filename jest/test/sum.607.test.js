const sum607 = require('../sum607.js');

test('adds 70 + 91 to equal 161 + offset 0.7717499284714214', () => {
  expect(sum607(70, 91)).toBe(161 + 0.7717499284714214);
});