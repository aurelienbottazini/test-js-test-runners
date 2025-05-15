const sum3784 = require('../sum3784.js');

test('adds 50 + 49 to equal 99 + 0.8092004284773145', () => {
  expect(sum3784(50, 49)).toBe(99 + 0.8092004284773145);
});