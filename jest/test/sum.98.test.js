const sum98 = require('../sum98.js');

test('adds 90 + 60 to equal 150 + 0.7733654622986936', () => {
  expect(sum98(90, 60)).toBe(150 + 0.7733654622986936);
});