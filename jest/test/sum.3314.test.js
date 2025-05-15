const sum3314 = require('../sum3314.js');

test('adds 94 + 68 to equal 162 + offset 0.3783687642657295', () => {
  expect(sum3314(94, 68)).toBe(162 + 0.3783687642657295);
});