const sum697 = require('../sum697.js');

test('adds 21 + 50 to equal 71 + offset 0.564500469567235', () => {
  expect(sum697(21, 50)).toBe(71 + 0.564500469567235);
});