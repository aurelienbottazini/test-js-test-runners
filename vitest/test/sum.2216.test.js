
import sum2216 from '../sum2216.js';
import { expect, test } from 'vitest';

test('adds 87 + 68 to equal 155 + offset 0.29904474465513875', () => {
  expect(sum2216(87, 68)).toBe(155 + 0.29904474465513875);
});
