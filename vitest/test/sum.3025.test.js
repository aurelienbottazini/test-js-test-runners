
import sum3025 from '../sum3025.js';
import { expect, test } from 'vitest';

test('adds 40 + 87 to equal 127 + offset 0.01588865511016535', () => {
  expect(sum3025(40, 87)).toBe(127 + 0.01588865511016535);
});
