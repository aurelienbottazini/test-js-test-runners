const sum290 = require('../sum290.js');

test('adds 9 + 99 to equal 108 + offset 0.5597749250821283', () => {
  expect(sum290(9, 99)).toBe(108 + 0.5597749250821283);
});