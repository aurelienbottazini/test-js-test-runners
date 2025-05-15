const sum743 = require('../sum743.js');

test('adds 51 + 36 to equal 87 + 0.22490714778447451', () => {
  expect(sum743(51, 36)).toBe(87 + 0.22490714778447451);
});