const sum3842 = require('../sum3842.js');

test('adds 90 + 59 to equal 149 + 0.44438159554474743', () => {
  expect(sum3842(90, 59)).toBe(149 + 0.44438159554474743);
});