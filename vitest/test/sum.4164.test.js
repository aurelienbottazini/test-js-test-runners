
import sum4164 from '../sum4164.js';
import { expect, test } from 'vitest';

test('adds 8 + 28 to equal 36 + offset 0.6482875317129588', () => {
  expect(sum4164(8, 28)).toBe(36 + 0.6482875317129588);
});
