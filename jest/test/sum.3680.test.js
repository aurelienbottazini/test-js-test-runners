const sum3680 = require('../sum3680.js');

test('adds 82 + 51 to equal 133 + offset 0.4451151049928549', () => {
  expect(sum3680(82, 51)).toBe(133 + 0.4451151049928549);
});