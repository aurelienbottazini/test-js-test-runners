const sum3424 = require('../sum3424.js');

test('adds 41 + 65 to equal 106 + 0.12399468636697653', () => {
  expect(sum3424(41, 65)).toBe(106 + 0.12399468636697653);
});