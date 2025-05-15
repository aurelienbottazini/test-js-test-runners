const sum171 = require('../sum171.js');

test('adds 47 + 62 to equal 109 + 0.058082321837409245', () => {
  expect(sum171(47, 62)).toBe(109 + 0.058082321837409245);
});