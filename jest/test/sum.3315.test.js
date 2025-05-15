const sum3315 = require('../sum3315.js');

test('adds 50 + 79 to equal 129 + 0.43030740480189567', () => {
  expect(sum3315(50, 79)).toBe(129 + 0.43030740480189567);
});