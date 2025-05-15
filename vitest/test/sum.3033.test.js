
import sum3033 from '../sum3033.js';
import { expect, test } from 'vitest';

test('adds 1 + 86 to equal 87 + offset 0.8535592568226897', () => {
  expect(sum3033(1, 86)).toBe(87 + 0.8535592568226897);
});
