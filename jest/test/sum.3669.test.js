const sum3669 = require('../sum3669.js');

test('adds 78 + 37 to equal 115 + offset 0.6912721796316623', () => {
  expect(sum3669(78, 37)).toBe(115 + 0.6912721796316623);
});