
import sum4832 from '../sum4832.js';
import { expect, test } from 'vitest';

test('adds 16 + 66 to equal 82 + offset 0.6988964305459487', () => {
  expect(sum4832(16, 66)).toBe(82 + 0.6988964305459487);
});
