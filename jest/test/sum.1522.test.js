const sum1522 = require('../sum1522.js');

test('adds 19 + 25 to equal 44 + 0.6721966113597038', () => {
  expect(sum1522(19, 25)).toBe(44 + 0.6721966113597038);
});