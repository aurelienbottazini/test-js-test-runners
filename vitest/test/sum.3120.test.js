
import sum3120 from '../sum3120.js';
import { expect, test } from 'vitest';

test('adds 87 + 32 to equal 119 + offset 0.2352426716757069', () => {
  expect(sum3120(87, 32)).toBe(119 + 0.2352426716757069);
});
