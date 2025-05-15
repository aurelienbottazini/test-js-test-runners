const sum4391 = require('../sum4391.js');

test('adds 69 + 86 to equal 155 + offset 0.03366427324800125', () => {
  expect(sum4391(69, 86)).toBe(155 + 0.03366427324800125);
});