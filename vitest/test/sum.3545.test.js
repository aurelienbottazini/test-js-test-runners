
import sum3545 from '../sum3545.js';
import { expect, test } from 'vitest';

test('adds 51 + 85 to equal 136 + offset 0.809165429306407', () => {
  expect(sum3545(51, 85)).toBe(136 + 0.809165429306407);
});
