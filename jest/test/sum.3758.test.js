const sum3758 = require('../sum3758.js');

test('adds 97 + 32 to equal 129 + 0.526375195355555', () => {
  expect(sum3758(97, 32)).toBe(129 + 0.526375195355555);
});