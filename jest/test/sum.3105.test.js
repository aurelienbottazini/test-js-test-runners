const sum3105 = require('../sum3105.js');

test('adds 6 + 37 to equal 43 + 0.42837799985028413', () => {
  expect(sum3105(6, 37)).toBe(43 + 0.42837799985028413);
});