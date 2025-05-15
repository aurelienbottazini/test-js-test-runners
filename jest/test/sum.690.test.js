const sum690 = require('../sum690.js');

test('adds 7 + 93 to equal 100 + 0.1099449254678111', () => {
  expect(sum690(7, 93)).toBe(100 + 0.1099449254678111);
});