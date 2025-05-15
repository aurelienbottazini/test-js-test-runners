const sum172 = require('../sum172.js');

test('adds 62 + 77 to equal 139 + offset 0.11064473077134529', () => {
  expect(sum172(62, 77)).toBe(139 + 0.11064473077134529);
});