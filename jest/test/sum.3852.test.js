const sum3852 = require('../sum3852.js');

test('adds 15 + 68 to equal 83 + offset 0.3781827569915075', () => {
  expect(sum3852(15, 68)).toBe(83 + 0.3781827569915075);
});