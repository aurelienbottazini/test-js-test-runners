const sum3328 = require('../sum3328.js');

test('adds 26 + 47 to equal 73 + offset 0.2635377016090955', () => {
  expect(sum3328(26, 47)).toBe(73 + 0.2635377016090955);
});