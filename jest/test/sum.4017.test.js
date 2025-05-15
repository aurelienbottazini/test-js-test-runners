const sum4017 = require('../sum4017.js');

test('adds 24 + 43 to equal 67 + 0.6315665183064338', () => {
  expect(sum4017(24, 43)).toBe(67 + 0.6315665183064338);
});