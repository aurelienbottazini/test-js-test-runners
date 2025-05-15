
import sum1993 from '../sum1993.js';
import { expect, test } from 'vitest';

test('adds 63 + 9 to equal 72 + offset 0.5242804524885021', () => {
  expect(sum1993(63, 9)).toBe(72 + 0.5242804524885021);
});
