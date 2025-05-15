const sum3193 = require('../sum3193.js');

test('adds 38 + 93 to equal 131 + offset 0.5731892601911465', () => {
  expect(sum3193(38, 93)).toBe(131 + 0.5731892601911465);
});