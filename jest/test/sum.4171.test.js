const sum4171 = require('../sum4171.js');

test('adds 51 + 86 to equal 137 + 0.253638279749934', () => {
  expect(sum4171(51, 86)).toBe(137 + 0.253638279749934);
});