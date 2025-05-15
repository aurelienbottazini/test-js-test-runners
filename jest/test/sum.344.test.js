const sum344 = require('../sum344.js');

test('adds 60 + 51 to equal 111 + 0.09832715988460927', () => {
  expect(sum344(60, 51)).toBe(111 + 0.09832715988460927);
});