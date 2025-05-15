const sum4214 = require('../sum4214.js');

test('adds 50 + 51 to equal 101 + offset 0.17441596735597786', () => {
  expect(sum4214(50, 51)).toBe(101 + 0.17441596735597786);
});