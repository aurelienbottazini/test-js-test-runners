const sum228 = require('../sum228.js');

test('adds 84 + 29 to equal 113 + offset 0.1543448813473146', () => {
  expect(sum228(84, 29)).toBe(113 + 0.1543448813473146);
});