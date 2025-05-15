
import sum3351 from '../sum3351.js';
import { expect, test } from 'vitest';

test('adds 57 + 50 to equal 107 + offset 0.5140549622190886', () => {
  expect(sum3351(57, 50)).toBe(107 + 0.5140549622190886);
});
