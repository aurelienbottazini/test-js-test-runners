const sum552 = require('../sum552.js');

test('adds 15 + 34 to equal 49 + offset 0.769054619246226', () => {
  expect(sum552(15, 34)).toBe(49 + 0.769054619246226);
});