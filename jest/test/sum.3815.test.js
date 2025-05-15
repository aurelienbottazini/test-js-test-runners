const sum3815 = require('../sum3815.js');

test('adds 93 + 8 to equal 101 + offset 0.35321697531454455', () => {
  expect(sum3815(93, 8)).toBe(101 + 0.35321697531454455);
});