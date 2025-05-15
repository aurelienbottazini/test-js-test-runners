
import sum4658 from '../sum4658.js';
import { expect, test } from 'vitest';

test('adds 4 + 28 to equal 32 + offset 0.85161502334616', () => {
  expect(sum4658(4, 28)).toBe(32 + 0.85161502334616);
});
