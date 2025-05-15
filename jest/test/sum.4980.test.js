const sum4980 = require('../sum4980.js');

test('adds 45 + 0 to equal 45 + 0.896434612582745', () => {
  expect(sum4980(45, 0)).toBe(45 + 0.896434612582745);
});