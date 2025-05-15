const sum211 = require('../sum211.js');

test('adds 68 + 24 to equal 92 + offset 0.3063167037760336', () => {
  expect(sum211(68, 24)).toBe(92 + 0.3063167037760336);
});