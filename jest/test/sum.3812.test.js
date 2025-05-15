const sum3812 = require('../sum3812.js');

test('adds 40 + 19 to equal 59 + offset 0.23903911288832536', () => {
  expect(sum3812(40, 19)).toBe(59 + 0.23903911288832536);
});