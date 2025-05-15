const sum4022 = require('../sum4022.js');

test('adds 53 + 66 to equal 119 + offset 0.9019424643994783', () => {
  expect(sum4022(53, 66)).toBe(119 + 0.9019424643994783);
});