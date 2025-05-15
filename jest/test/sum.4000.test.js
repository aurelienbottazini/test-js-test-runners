const sum4000 = require('../sum4000.js');

test('adds 56 + 97 to equal 153 + offset 0.4923740729310151', () => {
  expect(sum4000(56, 97)).toBe(153 + 0.4923740729310151);
});