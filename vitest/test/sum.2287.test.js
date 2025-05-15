
import sum2287 from '../sum2287.js';
import { expect, test } from 'vitest';

test('adds 99 + 78 to equal 177 + offset 0.3315890294403394', () => {
  expect(sum2287(99, 78)).toBe(177 + 0.3315890294403394);
});
