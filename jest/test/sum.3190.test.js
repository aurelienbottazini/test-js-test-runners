const sum3190 = require('../sum3190.js');

test('adds 93 + 87 to equal 180 + offset 0.10706760526938641', () => {
  expect(sum3190(93, 87)).toBe(180 + 0.10706760526938641);
});