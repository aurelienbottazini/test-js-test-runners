const sum3021 = require('../sum3021.js');

test('adds 16 + 79 to equal 95 + 0.7346002305122555', () => {
  expect(sum3021(16, 79)).toBe(95 + 0.7346002305122555);
});