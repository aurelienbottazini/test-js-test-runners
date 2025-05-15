const sum3151 = require('../sum3151.js');

test('adds 35 + 4 to equal 39 + offset 0.09235790387623999', () => {
  expect(sum3151(35, 4)).toBe(39 + 0.09235790387623999);
});