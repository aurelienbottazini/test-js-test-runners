const sum1607 = require('../sum1607.js');

test('adds 60 + 93 to equal 153 + 0.5477834824048252', () => {
  expect(sum1607(60, 93)).toBe(153 + 0.5477834824048252);
});