const sum3180 = require('../sum3180.js');

test('adds 84 + 72 to equal 156 + offset 0.7659921244731547', () => {
  expect(sum3180(84, 72)).toBe(156 + 0.7659921244731547);
});