const sum753 = require('../sum753.js');

test('adds 93 + 73 to equal 166 + offset 0.26370013855228513', () => {
  expect(sum753(93, 73)).toBe(166 + 0.26370013855228513);
});