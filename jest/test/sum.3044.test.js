const sum3044 = require('../sum3044.js');

test('adds 19 + 99 to equal 118 + offset 0.2322560507673883', () => {
  expect(sum3044(19, 99)).toBe(118 + 0.2322560507673883);
});