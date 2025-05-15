const sum51 = require('../sum51.js');

test('adds 39 + 59 to equal 98 + offset 0.4405513421677937', () => {
  expect(sum51(39, 59)).toBe(98 + 0.4405513421677937);
});