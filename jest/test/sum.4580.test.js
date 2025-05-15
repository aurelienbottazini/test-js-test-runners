const sum4580 = require('../sum4580.js');

test('adds 76 + 41 to equal 117 + 0.009521205435004232', () => {
  expect(sum4580(76, 41)).toBe(117 + 0.009521205435004232);
});