const sum434 = require('../sum434.js');

test('adds 38 + 71 to equal 109 + offset 0.20087729709565705', () => {
  expect(sum434(38, 71)).toBe(109 + 0.20087729709565705);
});