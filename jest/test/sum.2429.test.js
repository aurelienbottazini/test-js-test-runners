const sum2429 = require('../sum2429.js');

test('adds 10 + 97 to equal 107 + offset 0.20909510047188407', () => {
  expect(sum2429(10, 97)).toBe(107 + 0.20909510047188407);
});