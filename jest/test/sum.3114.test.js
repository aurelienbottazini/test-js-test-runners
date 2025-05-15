const sum3114 = require('../sum3114.js');

test('adds 91 + 20 to equal 111 + offset 0.2905963604706514', () => {
  expect(sum3114(91, 20)).toBe(111 + 0.2905963604706514);
});