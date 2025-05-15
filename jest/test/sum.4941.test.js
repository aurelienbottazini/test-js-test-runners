const sum4941 = require('../sum4941.js');

test('adds 53 + 19 to equal 72 + offset 0.379635316050666', () => {
  expect(sum4941(53, 19)).toBe(72 + 0.379635316050666);
});