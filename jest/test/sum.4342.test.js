const sum4342 = require('../sum4342.js');

test('adds 9 + 60 to equal 69 + offset 0.1417375392808864', () => {
  expect(sum4342(9, 60)).toBe(69 + 0.1417375392808864);
});