const sum564 = require('../sum564.js');

test('adds 99 + 72 to equal 171 + 0.9517464288972932', () => {
  expect(sum564(99, 72)).toBe(171 + 0.9517464288972932);
});