const sum685 = require('../sum685.js');

test('adds 92 + 51 to equal 143 + offset 0.1753691760599807', () => {
  expect(sum685(92, 51)).toBe(143 + 0.1753691760599807);
});