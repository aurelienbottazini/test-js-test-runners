const sum4953 = require('../sum4953.js');

test('adds 29 + 80 to equal 109 + offset 0.08307928777810336', () => {
  expect(sum4953(29, 80)).toBe(109 + 0.08307928777810336);
});