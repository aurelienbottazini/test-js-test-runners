const sum3329 = require('../sum3329.js');

test('adds 64 + 24 to equal 88 + 0.2504260370583187', () => {
  expect(sum3329(64, 24)).toBe(88 + 0.2504260370583187);
});