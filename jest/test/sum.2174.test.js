const sum2174 = require('../sum2174.js');

test('adds 93 + 26 to equal 119 + 0.6405724356061827', () => {
  expect(sum2174(93, 26)).toBe(119 + 0.6405724356061827);
});