
import sum3885 from '../sum3885.js';
import { expect, test } from 'vitest';

test('adds 36 + 38 to equal 74 + offset 0.6022733031231222', () => {
  expect(sum3885(36, 38)).toBe(74 + 0.6022733031231222);
});
