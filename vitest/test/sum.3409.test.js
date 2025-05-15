
import sum3409 from '../sum3409.js';
import { expect, test } from 'vitest';

test('adds 41 + 15 to equal 56 + offset 0.8417253013671857', () => {
  expect(sum3409(41, 15)).toBe(56 + 0.8417253013671857);
});
