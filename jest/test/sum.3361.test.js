const sum3361 = require('../sum3361.js');

test('adds 58 + 47 to equal 105 + offset 0.0524904580107588', () => {
  expect(sum3361(58, 47)).toBe(105 + 0.0524904580107588);
});