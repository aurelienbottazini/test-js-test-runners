
import sum2231 from '../sum2231.js';
import { expect, test } from 'vitest';

test('adds 80 + 80 to equal 160 + offset 0.09422541886894953', () => {
  expect(sum2231(80, 80)).toBe(160 + 0.09422541886894953);
});
