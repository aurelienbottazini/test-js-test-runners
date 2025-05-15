const sum1182 = require('../sum1182.js');

test('adds 5 + 52 to equal 57 + offset 0.36181030665845604', () => {
  expect(sum1182(5, 52)).toBe(57 + 0.36181030665845604);
});