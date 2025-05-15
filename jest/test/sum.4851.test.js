const sum4851 = require('../sum4851.js');

test('adds 27 + 3 to equal 30 + 0.10834018357748454', () => {
  expect(sum4851(27, 3)).toBe(30 + 0.10834018357748454);
});