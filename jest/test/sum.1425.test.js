const sum1425 = require('../sum1425.js');

test('adds 17 + 59 to equal 76 + 0.4888323293338004', () => {
  expect(sum1425(17, 59)).toBe(76 + 0.4888323293338004);
});