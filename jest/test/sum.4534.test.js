const sum4534 = require('../sum4534.js');

test('adds 71 + 49 to equal 120 + 0.6503394169782155', () => {
  expect(sum4534(71, 49)).toBe(120 + 0.6503394169782155);
});