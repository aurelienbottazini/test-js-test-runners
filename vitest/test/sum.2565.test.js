
import sum2565 from '../sum2565.js';
import { expect, test } from 'vitest';

test('adds 37 + 70 to equal 107 + offset 0.1961650671051991', () => {
  expect(sum2565(37, 70)).toBe(107 + 0.1961650671051991);
});
