const sum285 = require('../sum285.js');

test('adds 28 + 71 to equal 99 + offset 0.37668223593116457', () => {
  expect(sum285(28, 71)).toBe(99 + 0.37668223593116457);
});