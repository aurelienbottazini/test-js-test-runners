const sum941 = require('../sum941.js');

test('adds 81 + 20 to equal 101 + 0.577433164746344', () => {
  expect(sum941(81, 20)).toBe(101 + 0.577433164746344);
});