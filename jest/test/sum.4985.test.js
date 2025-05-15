const sum4985 = require('../sum4985.js');

test('adds 92 + 26 to equal 118 + 0.42485210576871735', () => {
  expect(sum4985(92, 26)).toBe(118 + 0.42485210576871735);
});