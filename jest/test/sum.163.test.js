const sum163 = require('../sum163.js');

test('adds 68 + 5 to equal 73 + 0.058385573371012245', () => {
  expect(sum163(68, 5)).toBe(73 + 0.058385573371012245);
});