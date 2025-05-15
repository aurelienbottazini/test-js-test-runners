const sum3528 = require('../sum3528.js');

test('adds 30 + 74 to equal 104 + offset 0.4361902026674811', () => {
  expect(sum3528(30, 74)).toBe(104 + 0.4361902026674811);
});