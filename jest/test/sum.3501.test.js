const sum3501 = require('../sum3501.js');

test('adds 10 + 61 to equal 71 + 0.050427261867647344', () => {
  expect(sum3501(10, 61)).toBe(71 + 0.050427261867647344);
});