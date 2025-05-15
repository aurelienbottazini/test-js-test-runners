const sum3198 = require('../sum3198.js');

test('adds 17 + 47 to equal 64 + offset 0.7909582401040622', () => {
  expect(sum3198(17, 47)).toBe(64 + 0.7909582401040622);
});