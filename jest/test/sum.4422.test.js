const sum4422 = require('../sum4422.js');

test('adds 87 + 42 to equal 129 + offset 0.4880273089091599', () => {
  expect(sum4422(87, 42)).toBe(129 + 0.4880273089091599);
});