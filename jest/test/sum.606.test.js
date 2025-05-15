const sum606 = require('../sum606.js');

test('adds 3 + 60 to equal 63 + 0.7369089349289187', () => {
  expect(sum606(3, 60)).toBe(63 + 0.7369089349289187);
});