const sum1455 = require('../sum1455.js');

test('adds 88 + 93 to equal 181 + offset 0.922346471442429', () => {
  expect(sum1455(88, 93)).toBe(181 + 0.922346471442429);
});