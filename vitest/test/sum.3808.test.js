
import sum3808 from '../sum3808.js';
import { expect, test } from 'vitest';

test('adds 89 + 9 to equal 98 + offset 0.677287380259014', () => {
  expect(sum3808(89, 9)).toBe(98 + 0.677287380259014);
});
