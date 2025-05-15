const sum4731 = require('../sum4731.js');

test('adds 79 + 76 to equal 155 + offset 0.5073936621436969', () => {
  expect(sum4731(79, 76)).toBe(155 + 0.5073936621436969);
});