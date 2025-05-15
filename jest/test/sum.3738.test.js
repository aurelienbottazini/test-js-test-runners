const sum3738 = require('../sum3738.js');

test('adds 97 + 51 to equal 148 + 0.3316289379213724', () => {
  expect(sum3738(97, 51)).toBe(148 + 0.3316289379213724);
});