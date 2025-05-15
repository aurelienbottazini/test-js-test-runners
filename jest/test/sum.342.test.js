const sum342 = require('../sum342.js');

test('adds 71 + 61 to equal 132 + 0.4399630245615975', () => {
  expect(sum342(71, 61)).toBe(132 + 0.4399630245615975);
});