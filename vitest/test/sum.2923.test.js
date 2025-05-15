
import sum2923 from '../sum2923.js';
import { expect, test } from 'vitest';

test('adds 48 + 54 to equal 102 + offset 0.5500838141221034', () => {
  expect(sum2923(48, 54)).toBe(102 + 0.5500838141221034);
});
