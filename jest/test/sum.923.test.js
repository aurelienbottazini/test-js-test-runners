const sum923 = require('../sum923.js');

test('adds 52 + 24 to equal 76 + 0.8825209551256422', () => {
  expect(sum923(52, 24)).toBe(76 + 0.8825209551256422);
});