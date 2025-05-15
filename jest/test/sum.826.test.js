const sum826 = require('../sum826.js');

test('adds 34 + 64 to equal 98 + 0.5505626726746651', () => {
  expect(sum826(34, 64)).toBe(98 + 0.5505626726746651);
});