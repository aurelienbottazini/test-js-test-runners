const sum4674 = require('../sum4674.js');

test('adds 58 + 57 to equal 115 + offset 0.002121690655561115', () => {
  expect(sum4674(58, 57)).toBe(115 + 0.002121690655561115);
});