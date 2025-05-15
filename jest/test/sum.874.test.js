const sum874 = require('../sum874.js');

test('adds 59 + 43 to equal 102 + offset 0.20966494247340828', () => {
  expect(sum874(59, 43)).toBe(102 + 0.20966494247340828);
});