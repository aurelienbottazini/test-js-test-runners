const sum4485 = require('../sum4485.js');

test('adds 4 + 26 to equal 30 + offset 0.004945908121363085', () => {
  expect(sum4485(4, 26)).toBe(30 + 0.004945908121363085);
});