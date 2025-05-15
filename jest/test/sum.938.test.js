const sum938 = require('../sum938.js');

test('adds 10 + 40 to equal 50 + 0.9322380710995238', () => {
  expect(sum938(10, 40)).toBe(50 + 0.9322380710995238);
});