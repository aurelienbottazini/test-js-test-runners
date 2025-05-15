const sum4146 = require('../sum4146.js');

test('adds 66 + 33 to equal 99 + 0.977738621823052', () => {
  expect(sum4146(66, 33)).toBe(99 + 0.977738621823052);
});