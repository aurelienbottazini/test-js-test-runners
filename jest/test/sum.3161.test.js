const sum3161 = require('../sum3161.js');

test('adds 51 + 19 to equal 70 + offset 0.7720226606007013', () => {
  expect(sum3161(51, 19)).toBe(70 + 0.7720226606007013);
});