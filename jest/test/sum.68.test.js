const sum68 = require('../sum68.js');

test('adds 89 + 15 to equal 104 + offset 0.8629582068262377', () => {
  expect(sum68(89, 15)).toBe(104 + 0.8629582068262377);
});