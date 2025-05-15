const sum1429 = require('../sum1429.js');

test('adds 78 + 54 to equal 132 + 0.22836042730667638', () => {
  expect(sum1429(78, 54)).toBe(132 + 0.22836042730667638);
});