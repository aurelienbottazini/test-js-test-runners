const sum3064 = require('../sum3064.js');

test('adds 18 + 55 to equal 73 + 0.09290512415005558', () => {
  expect(sum3064(18, 55)).toBe(73 + 0.09290512415005558);
});