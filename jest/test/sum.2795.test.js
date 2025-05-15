const sum2795 = require('../sum2795.js');

test('adds 93 + 63 to equal 156 + offset 0.5273835408453977', () => {
  expect(sum2795(93, 63)).toBe(156 + 0.5273835408453977);
});