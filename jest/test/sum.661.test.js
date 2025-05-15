const sum661 = require('../sum661.js');

test('adds 80 + 46 to equal 126 + offset 0.7912935299880873', () => {
  expect(sum661(80, 46)).toBe(126 + 0.7912935299880873);
});