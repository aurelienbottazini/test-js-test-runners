
import sum1911 from '../sum1911.js';
import { expect, test } from 'vitest';

test('adds 39 + 63 to equal 102 + offset 0.8500119594216652', () => {
  expect(sum1911(39, 63)).toBe(102 + 0.8500119594216652);
});
