const sum315 = require('../sum315.js');

test('adds 73 + 67 to equal 140 + offset 0.07359898246498697', () => {
  expect(sum315(73, 67)).toBe(140 + 0.07359898246498697);
});