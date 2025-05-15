const sum3064 = require('../sum3064.js');

test('adds 17 + 62 to equal 79 + offset 0.5986969567104129', () => {
  expect(sum3064(17, 62)).toBe(79 + 0.5986969567104129);
});