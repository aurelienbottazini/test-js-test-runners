const sum4138 = require('../sum4138.js');

test('adds 49 + 57 to equal 106 + 0.6385228340940959', () => {
  expect(sum4138(49, 57)).toBe(106 + 0.6385228340940959);
});