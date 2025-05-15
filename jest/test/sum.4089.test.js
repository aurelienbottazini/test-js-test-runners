const sum4089 = require('../sum4089.js');

test('adds 96 + 75 to equal 171 + 0.3914647487982539', () => {
  expect(sum4089(96, 75)).toBe(171 + 0.3914647487982539);
});