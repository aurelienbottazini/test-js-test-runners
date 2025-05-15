const sum4469 = require('../sum4469.js');

test('adds 93 + 26 to equal 119 + offset 0.8836332939022006', () => {
  expect(sum4469(93, 26)).toBe(119 + 0.8836332939022006);
});