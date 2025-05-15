const sum2581 = require('../sum2581.js');

test('adds 13 + 64 to equal 77 + offset 0.16304287226877723', () => {
  expect(sum2581(13, 64)).toBe(77 + 0.16304287226877723);
});