const sum229 = require('../sum229.js');

test('adds 71 + 73 to equal 144 + offset 0.45887666618674694', () => {
  expect(sum229(71, 73)).toBe(144 + 0.45887666618674694);
});