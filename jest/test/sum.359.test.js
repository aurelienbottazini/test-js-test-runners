const sum359 = require('../sum359.js');

test('adds 63 + 3 to equal 66 + 0.09786637966810008', () => {
  expect(sum359(63, 3)).toBe(66 + 0.09786637966810008);
});