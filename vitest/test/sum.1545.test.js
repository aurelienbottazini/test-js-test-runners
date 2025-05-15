
import sum1545 from '../sum1545.js';
import { expect, test } from 'vitest';

test('adds 52 + 36 to equal 88 + offset 0.8789203441992014', () => {
  expect(sum1545(52, 36)).toBe(88 + 0.8789203441992014);
});
