const sum3690 = require('../sum3690.js');

test('adds 51 + 80 to equal 131 + 0.44420011242785207', () => {
  expect(sum3690(51, 80)).toBe(131 + 0.44420011242785207);
});