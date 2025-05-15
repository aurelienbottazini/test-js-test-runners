const sum1264 = require('../sum1264.js');

test('adds 64 + 77 to equal 141 + offset 0.8438163674666751', () => {
  expect(sum1264(64, 77)).toBe(141 + 0.8438163674666751);
});