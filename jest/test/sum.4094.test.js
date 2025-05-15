const sum4094 = require('../sum4094.js');

test('adds 86 + 46 to equal 132 + 0.9550487246384897', () => {
  expect(sum4094(86, 46)).toBe(132 + 0.9550487246384897);
});