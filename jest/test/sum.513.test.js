const sum513 = require('../sum513.js');

test('adds 26 + 80 to equal 106 + offset 0.43803882387766735', () => {
  expect(sum513(26, 80)).toBe(106 + 0.43803882387766735);
});