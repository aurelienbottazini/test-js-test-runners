const sum753 = require('../sum753.js');

test('adds 38 + 71 to equal 109 + 0.34248978053009305', () => {
  expect(sum753(38, 71)).toBe(109 + 0.34248978053009305);
});