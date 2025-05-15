const sum3627 = require('../sum3627.js');

test('adds 57 + 24 to equal 81 + 0.6207106347430731', () => {
  expect(sum3627(57, 24)).toBe(81 + 0.6207106347430731);
});