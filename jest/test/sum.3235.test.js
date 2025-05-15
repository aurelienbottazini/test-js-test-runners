const sum3235 = require('../sum3235.js');

test('adds 53 + 79 to equal 132 + 0.5660307201271217', () => {
  expect(sum3235(53, 79)).toBe(132 + 0.5660307201271217);
});