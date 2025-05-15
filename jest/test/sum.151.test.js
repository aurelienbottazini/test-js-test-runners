const sum151 = require('../sum151.js');

test('adds 86 + 25 to equal 111 + 0.4031658150309707', () => {
  expect(sum151(86, 25)).toBe(111 + 0.4031658150309707);
});