const sum831 = require('../sum831.js');

test('adds 57 + 27 to equal 84 + 0.055301887747930656', () => {
  expect(sum831(57, 27)).toBe(84 + 0.055301887747930656);
});