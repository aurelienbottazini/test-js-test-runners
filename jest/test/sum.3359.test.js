const sum3359 = require('../sum3359.js');

test('adds 44 + 53 to equal 97 + 0.660595098230395', () => {
  expect(sum3359(44, 53)).toBe(97 + 0.660595098230395);
});