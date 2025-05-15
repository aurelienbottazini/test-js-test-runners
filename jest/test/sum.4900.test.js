const sum4900 = require('../sum4900.js');

test('adds 53 + 79 to equal 132 + 0.491489437056554', () => {
  expect(sum4900(53, 79)).toBe(132 + 0.491489437056554);
});