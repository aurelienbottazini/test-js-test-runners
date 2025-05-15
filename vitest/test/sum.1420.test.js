
import sum1420 from '../sum1420.js';
import { expect, test } from 'vitest';

test('adds 65 + 94 to equal 159 + offset 0.9951598240234683', () => {
  expect(sum1420(65, 94)).toBe(159 + 0.9951598240234683);
});
