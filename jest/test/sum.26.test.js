const sum26 = require('../sum26.js');

test('adds 92 + 26 to equal 118 + 0.6696325567288871', () => {
  expect(sum26(92, 26)).toBe(118 + 0.6696325567288871);
});