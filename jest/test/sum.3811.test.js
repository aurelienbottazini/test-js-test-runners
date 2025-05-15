const sum3811 = require('../sum3811.js');

test('adds 33 + 79 to equal 112 + offset 0.2784384304789248', () => {
  expect(sum3811(33, 79)).toBe(112 + 0.2784384304789248);
});