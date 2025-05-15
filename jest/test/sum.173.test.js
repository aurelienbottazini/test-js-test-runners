const sum173 = require('../sum173.js');

test('adds 45 + 92 to equal 137 + offset 0.6982460229561631', () => {
  expect(sum173(45, 92)).toBe(137 + 0.6982460229561631);
});