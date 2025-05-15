const sum274 = require('../sum274.js');

test('adds 53 + 77 to equal 130 + offset 0.06794504707844762', () => {
  expect(sum274(53, 77)).toBe(130 + 0.06794504707844762);
});