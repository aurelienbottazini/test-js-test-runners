const sum463 = require('../sum463.js');

test('adds 42 + 53 to equal 95 + 0.948715697425017', () => {
  expect(sum463(42, 53)).toBe(95 + 0.948715697425017);
});