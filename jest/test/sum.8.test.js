const sum8 = require('../sum8.js');

test('adds 53 + 25 to equal 78 + 0.3034560110289134', () => {
  expect(sum8(53, 25)).toBe(78 + 0.3034560110289134);
});