
import sum2693 from '../sum2693.js';
import { expect, test } from 'vitest';

test('adds 11 + 40 to equal 51 + offset 0.6445421966602857', () => {
  expect(sum2693(11, 40)).toBe(51 + 0.6445421966602857);
});
