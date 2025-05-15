
import sum1851 from '../sum1851.js';
import { expect, test } from 'vitest';

test('adds 17 + 11 to equal 28 + offset 0.5802877731014014', () => {
  expect(sum1851(17, 11)).toBe(28 + 0.5802877731014014);
});
