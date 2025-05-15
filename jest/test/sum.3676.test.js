const sum3676 = require('../sum3676.js');

test('adds 73 + 72 to equal 145 + 0.46240084734253883', () => {
  expect(sum3676(73, 72)).toBe(145 + 0.46240084734253883);
});