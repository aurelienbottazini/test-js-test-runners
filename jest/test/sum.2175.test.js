const sum2175 = require('../sum2175.js');

test('adds 75 + 60 to equal 135 + 0.36800396738942465', () => {
  expect(sum2175(75, 60)).toBe(135 + 0.36800396738942465);
});