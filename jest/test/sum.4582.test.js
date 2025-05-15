const sum4582 = require('../sum4582.js');

test('adds 32 + 84 to equal 116 + 0.10996980520047395', () => {
  expect(sum4582(32, 84)).toBe(116 + 0.10996980520047395);
});