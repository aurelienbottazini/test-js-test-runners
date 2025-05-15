const sum573 = require('../sum573.js');

test('adds 85 + 0 to equal 85 + 0.7105181702688036', () => {
  expect(sum573(85, 0)).toBe(85 + 0.7105181702688036);
});