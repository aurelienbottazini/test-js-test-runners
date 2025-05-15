const sum2939 = require('../sum2939.js');

test('adds 84 + 42 to equal 126 + offset 0.7171980159100996', () => {
  expect(sum2939(84, 42)).toBe(126 + 0.7171980159100996);
});