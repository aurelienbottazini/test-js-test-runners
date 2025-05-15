const sum18 = require('../sum18.js');

test('adds 49 + 95 to equal 144 + 0.7587955354303768', () => {
  expect(sum18(49, 95)).toBe(144 + 0.7587955354303768);
});