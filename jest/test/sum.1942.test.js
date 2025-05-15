const sum1942 = require('../sum1942.js');

test('adds 43 + 16 to equal 59 + offset 0.12648503675959732', () => {
  expect(sum1942(43, 16)).toBe(59 + 0.12648503675959732);
});