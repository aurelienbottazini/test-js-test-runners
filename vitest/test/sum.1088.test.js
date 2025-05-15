
import sum1088 from '../sum1088.js';
import { expect, test } from 'vitest';

test('adds 37 + 90 to equal 127 + offset 0.3111605607272184', () => {
  expect(sum1088(37, 90)).toBe(127 + 0.3111605607272184);
});
