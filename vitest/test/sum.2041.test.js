
import sum2041 from '../sum2041.js';
import { expect, test } from 'vitest';

test('adds 29 + 99 to equal 128 + offset 0.8732963116816016', () => {
  expect(sum2041(29, 99)).toBe(128 + 0.8732963116816016);
});
