const sum3364 = require('../sum3364.js');

test('adds 93 + 75 to equal 168 + 0.9473479701585374', () => {
  expect(sum3364(93, 75)).toBe(168 + 0.9473479701585374);
});