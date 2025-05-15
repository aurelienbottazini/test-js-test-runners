const sum3525 = require('../sum3525.js');

test('adds 24 + 94 to equal 118 + offset 0.9040079304945069', () => {
  expect(sum3525(24, 94)).toBe(118 + 0.9040079304945069);
});