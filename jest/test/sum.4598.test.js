const sum4598 = require('../sum4598.js');

test('adds 70 + 0 to equal 70 + 0.5180632101937522', () => {
  expect(sum4598(70, 0)).toBe(70 + 0.5180632101937522);
});