const sum368 = require('../sum368.js');

test('adds 55 + 43 to equal 98 + 0.009866820401643439', () => {
  expect(sum368(55, 43)).toBe(98 + 0.009866820401643439);
});