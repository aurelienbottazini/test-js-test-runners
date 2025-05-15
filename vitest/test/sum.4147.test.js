
import sum4147 from '../sum4147.js';
import { expect, test } from 'vitest';

test('adds 22 + 27 to equal 49 + offset 0.24267938863314664', () => {
  expect(sum4147(22, 27)).toBe(49 + 0.24267938863314664);
});
