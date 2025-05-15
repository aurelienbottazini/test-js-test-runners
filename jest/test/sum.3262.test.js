const sum3262 = require('../sum3262.js');

test('adds 57 + 26 to equal 83 + offset 0.007631997844053995', () => {
  expect(sum3262(57, 26)).toBe(83 + 0.007631997844053995);
});