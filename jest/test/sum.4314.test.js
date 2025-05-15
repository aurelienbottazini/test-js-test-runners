const sum4314 = require('../sum4314.js');

test('adds 87 + 39 to equal 126 + offset 0.9163899798127529', () => {
  expect(sum4314(87, 39)).toBe(126 + 0.9163899798127529);
});