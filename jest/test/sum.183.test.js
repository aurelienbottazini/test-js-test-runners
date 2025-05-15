const sum183 = require('../sum183.js');

test('adds 15 + 69 to equal 84 + offset 0.09190375233414272', () => {
  expect(sum183(15, 69)).toBe(84 + 0.09190375233414272);
});