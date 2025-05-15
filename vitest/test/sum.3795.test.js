
import sum3795 from '../sum3795.js';
import { expect, test } from 'vitest';

test('adds 26 + 45 to equal 71 + offset 0.014057184485613439', () => {
  expect(sum3795(26, 45)).toBe(71 + 0.014057184485613439);
});
