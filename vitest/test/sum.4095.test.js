
import sum4095 from '../sum4095.js';
import { expect, test } from 'vitest';

test('adds 66 + 5 to equal 71 + offset 0.8776918970360023', () => {
  expect(sum4095(66, 5)).toBe(71 + 0.8776918970360023);
});
