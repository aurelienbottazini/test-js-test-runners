
import sum3519 from '../sum3519.js';
import { expect, test } from 'vitest';

test('adds 9 + 8 to equal 17 + offset 0.6529593060864053', () => {
  expect(sum3519(9, 8)).toBe(17 + 0.6529593060864053);
});
