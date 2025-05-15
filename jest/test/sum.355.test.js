const sum355 = require('../sum355.js');

test('adds 11 + 89 to equal 100 + 0.9089605900219161', () => {
  expect(sum355(11, 89)).toBe(100 + 0.9089605900219161);
});