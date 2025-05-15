const sum4268 = require('../sum4268.js');

test('adds 20 + 64 to equal 84 + 0.4773442646056445', () => {
  expect(sum4268(20, 64)).toBe(84 + 0.4773442646056445);
});