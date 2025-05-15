const sum369 = require('../sum369.js');

test('adds 69 + 39 to equal 108 + offset 0.4079541851145144', () => {
  expect(sum369(69, 39)).toBe(108 + 0.4079541851145144);
});