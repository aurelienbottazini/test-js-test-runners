
import sum2851 from '../sum2851.js';
import { expect, test } from 'vitest';

test('adds 48 + 54 to equal 102 + offset 0.1924112740661026', () => {
  expect(sum2851(48, 54)).toBe(102 + 0.1924112740661026);
});
