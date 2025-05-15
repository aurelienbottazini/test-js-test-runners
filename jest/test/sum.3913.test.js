const sum3913 = require('../sum3913.js');

test('adds 71 + 43 to equal 114 + 0.8036415675156892', () => {
  expect(sum3913(71, 43)).toBe(114 + 0.8036415675156892);
});