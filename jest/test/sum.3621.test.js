const sum3621 = require('../sum3621.js');

test('adds 74 + 59 to equal 133 + offset 0.09284582712944023', () => {
  expect(sum3621(74, 59)).toBe(133 + 0.09284582712944023);
});