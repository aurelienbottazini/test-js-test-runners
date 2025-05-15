const sum480 = require('../sum480.js');

test('adds 68 + 41 to equal 109 + 0.8781906540479775', () => {
  expect(sum480(68, 41)).toBe(109 + 0.8781906540479775);
});