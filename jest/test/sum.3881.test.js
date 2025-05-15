const sum3881 = require('../sum3881.js');

test('adds 25 + 16 to equal 41 + 0.5322067603702738', () => {
  expect(sum3881(25, 16)).toBe(41 + 0.5322067603702738);
});