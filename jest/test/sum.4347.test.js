const sum4347 = require('../sum4347.js');

test('adds 40 + 23 to equal 63 + 0.1088009185521508', () => {
  expect(sum4347(40, 23)).toBe(63 + 0.1088009185521508);
});