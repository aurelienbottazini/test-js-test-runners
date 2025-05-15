const sum4666 = require('../sum4666.js');

test('adds 74 + 80 to equal 154 + 0.8945910440461078', () => {
  expect(sum4666(74, 80)).toBe(154 + 0.8945910440461078);
});