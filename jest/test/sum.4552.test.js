const sum4552 = require('../sum4552.js');

test('adds 30 + 66 to equal 96 + 0.9934538732772166', () => {
  expect(sum4552(30, 66)).toBe(96 + 0.9934538732772166);
});