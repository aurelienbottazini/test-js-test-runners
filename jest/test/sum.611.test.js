const sum611 = require('../sum611.js');

test('adds 47 + 7 to equal 54 + offset 0.26083805159416196', () => {
  expect(sum611(47, 7)).toBe(54 + 0.26083805159416196);
});