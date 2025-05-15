const sum2877 = require('../sum2877.js');

test('adds 64 + 24 to equal 88 + 0.5479676828283347', () => {
  expect(sum2877(64, 24)).toBe(88 + 0.5479676828283347);
});