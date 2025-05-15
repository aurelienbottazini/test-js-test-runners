const sum560 = require('../sum560.js');

test('adds 79 + 91 to equal 170 + offset 0.6179583962920813', () => {
  expect(sum560(79, 91)).toBe(170 + 0.6179583962920813);
});