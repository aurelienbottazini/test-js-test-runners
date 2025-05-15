const sum3884 = require('../sum3884.js');

test('adds 6 + 66 to equal 72 + 0.5001216116450662', () => {
  expect(sum3884(6, 66)).toBe(72 + 0.5001216116450662);
});