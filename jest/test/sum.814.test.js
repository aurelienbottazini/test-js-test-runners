const sum814 = require('../sum814.js');

test('adds 19 + 65 to equal 84 + offset 0.40673803674231623', () => {
  expect(sum814(19, 65)).toBe(84 + 0.40673803674231623);
});