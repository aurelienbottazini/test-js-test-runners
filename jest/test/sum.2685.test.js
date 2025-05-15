const sum2685 = require('../sum2685.js');

test('adds 91 + 44 to equal 135 + 0.6605350014067783', () => {
  expect(sum2685(91, 44)).toBe(135 + 0.6605350014067783);
});