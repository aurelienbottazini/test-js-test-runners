const sum38 = require('../sum38.js');

test('adds 97 + 84 to equal 181 + offset 0.8237245021904087', () => {
  expect(sum38(97, 84)).toBe(181 + 0.8237245021904087);
});