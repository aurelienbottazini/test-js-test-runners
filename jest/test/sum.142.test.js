const sum142 = require('../sum142.js');

test('adds 13 + 80 to equal 93 + offset 0.9002884671458938', () => {
  expect(sum142(13, 80)).toBe(93 + 0.9002884671458938);
});