const sum3136 = require('../sum3136.js');

test('adds 4 + 16 to equal 20 + offset 0.31370859709422194', () => {
  expect(sum3136(4, 16)).toBe(20 + 0.31370859709422194);
});