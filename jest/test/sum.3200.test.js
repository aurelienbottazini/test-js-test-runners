const sum3200 = require('../sum3200.js');

test('adds 97 + 2 to equal 99 + 0.3978594073492049', () => {
  expect(sum3200(97, 2)).toBe(99 + 0.3978594073492049);
});