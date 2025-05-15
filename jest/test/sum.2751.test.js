const sum2751 = require('../sum2751.js');

test('adds 57 + 10 to equal 67 + 0.9597116095516138', () => {
  expect(sum2751(57, 10)).toBe(67 + 0.9597116095516138);
});